import {create} from 'zustand'
import {devtools,persist} from 'zustand/middleware'
//persist middleware lets you persist a store's state across page reloads or application restarts.
//devtools middleware lets you use Redux DevTools Extension without Redux.

const courseStore=(set)=>({
    courses:[],
    addCourse:(course)=>{
        set((state)=>{
            console.log(state.courses);
            return {
                courses:[course,...state.courses]
            }
        })
    },

    removeCourse:(courseId)=>{
        set((state)=>{
            return{
                courses:state.courses.filter((c)=>c.id !== courseId)
            }
        })
    },

    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
})

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;