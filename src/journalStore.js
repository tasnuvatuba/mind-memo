import create from 'zustand';
import { uid } from "uid";

const useJournalStore = create((set) => ({
  journals: [
    {   
        id: uid(),
        title: "Yellow",
        lastModified: "2024-03-09, 09:27",
        createdAt: "2024-03-09, 09:27",
        desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <strike>ipsum</strike> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <span style=\"color: rgb(230, 0, 0);\">bvjkshsagy</span>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>",
        category: "Learning",
        mood: "Neutral",
        fav: true,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Green",
        lastModified: "2024-03-21, 09:27",
        createdAt: "2024-03-21, 09:27",
        desc: "<p>Desc of Green</p>",
        category: "Travelling",
        mood: "Sad",
        fav: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      },
    
      { 
        id: uid(),
        title: "Blue",
        lastModified: "2024-03-03, 09:27",
        createdAt: "2024-03-03, 09:27",
        desc: "<p>Desc of Blue</p>",
        category: "Travelling",
        mood: "Happy",
        fav: false,
        img: "https://st2.depositphotos.com/27201292/44377/i/450/depositphotos_443773160-stock-photo-vertical-shot-car-side-mirror.jpg"
      },

      { 
        id: uid(),
        title: "Avocado",
        lastModified: "2024-03-12, 09:27",
        createdAt: "2024-03-12, 09:27",
        desc: "<p>Desc of Avocado</p>",
        category: "Travelling",
        mood: "Happy",
        fav: false,
        img: "https://st2.depositphotos.com/27201292/44377/i/450/depositphotos_443773160-stock-photo-vertical-shot-car-side-mirror.jpg"
      },

      { 
        id: uid(),
        title: "Mint",
        lastModified: "2024-03-30, 09:27",
        createdAt: "2024-03-30, 09:27",
        desc: "<p>Desc of Mint</p>",
        category: "Travelling",
        mood: "Happy",
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
