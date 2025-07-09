//大まかな構成はここに書く
const taskList = getElementByID("list");
const request = indexedDB.open('TodoDB', 1); // 第2引数はバージョン

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // 既に存在しなければオブジェクトストア（テーブル）を作る
    if (!db.objectStoreNames.contains('tasks')) {
        const store = db.createObjectStore('tasks', {
            keyPath: 'id', // 主キー
            autoIncrement: true //idの自動割り当て
        });
        //検索に必要な要素はここで定義↓
        //store.createIndex('doneIndex', 'done', { unique: false });
    }
};


window.onload = function () {
    store.add({
        title: '牛乳を買う',
        note: '朝までに',
        done: false,
        date: '2025-07-09'
    });
}

const request = store.getAll();

request.onsuccess = () => {
  request.result.forEach(task => {
    console.log(task.title); // 表示用に使える
    console.log(task.note);  // 定義してなくても使える
  });
};
