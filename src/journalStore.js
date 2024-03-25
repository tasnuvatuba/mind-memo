import create from 'zustand';
import { uid } from "uid";

const useJournalStore = create((set) => ({
  journals: [
    {   
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Travelling",
        mood: "happy",
        fav: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "Desc of journal 1",
        category: "Travelling",
        mood: "happy",
        fav: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "Desc of journal 1",
        category: "Travelling",
        mood: "happy",
        fav: false,
        img: "https://st2.depositphotos.com/27201292/44377/i/450/depositphotos_443773160-stock-photo-vertical-shot-car-side-mirror.jpg"
      }
  ],

  addJournal: (journal) => set((state) => ({ journals: [...state.journals, journal] })),

  updateJournal: (id, updatedJournal) =>
    set((state) => ({
      journals: state.journals.map((journal) => (journal.id === id ? updatedJournal : journal)),
    })),

  deleteJournal: (id) =>
    set((state) => ({
      journals: state.journals.filter((journal) => journal.id !== id),
    })),
}));

export default useJournalStore;
