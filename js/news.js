import { db } from "./firebase.js";
import { collection, getDocs, query, orderBy }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const q = query(collection(db, "news"), orderBy("time", "desc"));
const snap = await getDocs(q);

snap.forEach(doc => {
  const d = doc.data();
  news.innerHTML += `
    <div class="card">
      <img src="${d.image}">
      <h3>${d.title}</h3>
      <p>${d.content}</p>
    </div>
  `;
});
