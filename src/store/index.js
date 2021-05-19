import { createStore } from 'redux'

const SUBJECT_STATE = { 
   subjects: [
    {
        id: 1,
        title: "Todas as matérias",
        code: "all",
        color: "#5fa8d3",
        selected: false
    },
    {
        id: 2,
        title: "Matemática",
        code: "math",
        color: "#43a047",
        selected: false
    },
    {
        id: 3,
        title: "Língua Portuguesa",
        code: "portuguese",
        color: "#7c8217",
        selected: false
    },
    {
        id: 4,
        title: "História",
        code: "history",
        color: "#795548",
        selected: false
    },
    {
        id: 5,
        title: "Geografia",
        code: "geography",
        color: "#ef6c00",
        selected: false
    },
    {
        id: 6,
        title: "Filosofia",
        code: "philosophy",
        color: "#00796b",
        selected: false
    },
    {
        id: 7,
        title: "Arte",
        code: "arts",
        color: "#ef5350",
        selected: false
    },
    {
        id: 8,
        title: "Língua Inglesa",
        code: "english",
        color: "#7b20a2",
        selected: false
    },
    {
        id: 9,
        title: "Biologia",
        code: "biology",
        color: "#7cb342",
        selected: false
    },
    {
        id: 10,
        title: "Educação Física",
        code: "physical_education",
        color: "#009743",
        selected: false
    },
    {
        id: 11,
        title: "Física",
        code: "physics",
        color: "#ac9811",
        selected: false
    },
    {
        id: 12,
        title: "Literatura",
        code: "literature",
        color: "#bf360c",
        selected: false
    },
    {
        id: 13,
        title: "Química",
        code: "chemistry",
        color: "#0277bd",
        selected: false
    },
    {
        id: 14,
        title: "Sociologia",
        code: "sociology",
        color: "#cb8800",
        selected: false
    },
],
selected: ["all"]
}

function subjects(state = SUBJECT_STATE, action) {
    switch(action.type) {
        case "CHANGE_SELECTED": 
            return { ...state, selected: [action.selected] }
        default:
            return state
    }
}



const store = createStore(subjects)

export { store }