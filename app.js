// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkv-wWbUZo3l8WjeLF2beVeEc4Jslwk4Q",
  authDomain: "cc-ala-1.firebaseapp.com",
  projectId: "cc-ala-1",
  storageBucket: "cc-ala-1.firebasestorage.app",
  messagingSenderId: "447464507769",
  appId: "1:447464507769:web:192622667752ecf24dc7a8",
  measurementId: "G-Z8N0C7P1ET"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCol = collection(db, "student_notes");

const form = document.getElementById("noteForm");
const list = document.getElementById("notesList");

// Fetch and display stored notes
async function fetchNotes() {
  list.innerHTML = "<p style='color: #64748b;'>Syncing from Firestore...</p>";
  try {
    const q = query(notesCol, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      list.innerHTML = "<p style='color: #64748b;'>No records found in cloud storage.</p>";
      return;
    }
    
    list.innerHTML = "";
    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      const div = document.createElement("div");
      div.className = "note-item";
      div.innerHTML = `
        <div>
          <strong>${data.title}</strong>
          <p style="margin: 4px 0 0; color: #475569; font-size: 13px;">${data.content}</p>
        </div>
        <button class="delete-btn" data-id="${docSnapshot.id}">Delete</button>
      `;
      list.appendChild(div);
    });

    // Attach delete listeners
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.getAttribute("data-id");
        await deleteDoc(doc(db, "student_notes", id));
        fetchNotes();
      });
    });
  } catch (err) {
    list.innerHTML = `<p style="color: red;">Error connecting to Firestore: ${err.message}</p>`;
  }
}

// Add new note to Firestore
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) return;

  try {
    await addDoc(notesCol, {
      title,
      content,
      createdAt: serverTimestamp()
    });

    form.reset();
    fetchNotes();
  } catch (err) {
    alert("Failed to write to database: " + err.message);
  }
});

// Initial load
fetchNotes();