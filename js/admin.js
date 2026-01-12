import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { addDoc, collection, serverTimestamp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, user => {
  if (!user) location = "login.html";
});

addNews.onclick = async () => {
  await addDoc(collection(db, "news"), {
    title: title.value,
    image: image.value,
    content: content.value,
    time: serverTimestamp()
  });
  alert("News нэмэгдлээ");
};

logout.onclick = () => signOut(auth);
