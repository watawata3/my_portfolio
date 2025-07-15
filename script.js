document.getElementById("addForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ← 送信処理を止める（リロード防止）
    //サーバーに送ったり、保存したり
    const addFormData = new FormData(e.target);
    const output = document.getElementById("list");
    const li = document.createElement("li");

    const title = addFormData.get("title");
    const content = addFormData.get("content");
    const taskId = addFormData.get("taskId")

    const span = document.createElement("span");
    span.textContent = `${title}：${content}`;
    const button = document.createElement("button");
    button.textContent = "削除";
    li.setAttribute("id", "tId" + taskId);

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);


    button.addEventListener("click", function () {
        var tId=li.id.match(/\d+/);
        tId = parseInt(tId, 10);
        alert(tId);
        li.remove();
    });


});
/*
addTask =function(){

}
*/






/*
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
*/