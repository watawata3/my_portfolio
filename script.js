const taskList = document.getElementById("list");
const openReq = indexedDB.open('TodoDB', 1);

// DBのスキーマ定義（最初だけ）
openReq.onupgradeneeded = function (event) {
    const db = event.target.result;

    if (!db.objectStoreNames.contains('tasks')) {
        const store = db.createObjectStore('tasks', {
            keyPath: 'id',
            autoIncrement: true
        });
//        store.createIndex('doneIndex', 'done', { unique: false });
    }
};

// DBが開かれたら（ここでstoreが使える）
openReq.onsuccess = function (event) {
    const db = event.target.result;
    // データ追加
    /*const tx = db.transaction('tasks', 'readwrite');
    const store = tx.objectStore('tasks');
    store.add({
        title: '牛乳を買う',
        note: '朝までに',
        done: false,
        date: '2025-07-09'
    });*/

    // データ読み込み・表示
    const readTx = db.transaction('tasks', 'readonly');
    const readStore = readTx.objectStore('tasks');
    const getAllRequest = readStore.getAll();

    getAllRequest.onsuccess = function () {
        getAllRequest.result.forEach(task => {
            const div = document.createElement("div");
            div.textContent = `${task.title} - ${task.note} (${task.date})`;
            taskList.appendChild(div);
        });
    };
};

openReq.onerror = function (event) {
    console.error("IndexedDBエラー:", event.target.error);
};
