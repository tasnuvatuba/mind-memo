import create from 'zustand';
import { uid } from "uid";

const useJournalStore = create((set) => ({
  journals: [
    {   
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <strike>ipsum</strike> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <span style=\"color: rgb(230, 0, 0);\">bvjkshsagy</span>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>",
        category: "Travelling",
        mood: "Neutral",
        fav: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "<p>Desc of journal 1</p>",
        category: "Travelling",
        mood: "Sad",
        fav: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "<p>Desc of journal 1</p>",
        category: "Travelling",
        mood: "Happy",
        fav: false,
        img: "https://st2.depositphotos.com/27201292/44377/i/450/depositphotos_443773160-stock-photo-vertical-shot-car-side-mirror.jpg"
      },

      { 
        id: uid(),
        title: "Journal 1",
        lastModified: "25.03.2024",
        createdAt: "25.03.2024",
        desc: "<p>Desc of journal 1</p>",
        category: "Travelling",
        mood: "Angry",
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
