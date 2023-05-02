import React from 'react'
import { Task } from '../../models/Task_class'
import { LEVELS } from '../../models/Levels.enum'
import TaskComponent from '../pure/TaskComponent'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Task:</h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista  */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent