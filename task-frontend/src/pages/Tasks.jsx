import React, { useState } from 'react'

function Task() {
    return (
        <div class="tasks-content" style={{ backgroundColor: 'green'}}>
            <h1 style={{fontSize: 30}}>Manage Taskd</h1>
            <div>
                <table style={{ border: 'solid white', borderCollapse: 'collapse', marginBottom:20}}>
                    <thead>
                        <tr>
                            <th class="header-table">Title</th>
                            <th class="header-table">Desciption</th>
                            <th class="header-table">Status</th>
                            <th class="header-table">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                title
                            </td>
                            <td>
                                description
                            </td>
                            <td>
                                status
                            </td>
                            <td>
                                <div class="edit-content" style={{ display: 'flex', marginRight: 10 }}>
                                    <button class="view-button" style={{ fontSize: 20 }}>
                                        View
                                    </button>
                                    <button class="update-button" style={{ fontSize: 20 }}>
                                        Update
                                    </button>
                                    <button class="delete-button" style={{ fontSize: 20 }}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button style={{ fontSize: 20 }}>
                Create New Task
            </button>
        </div>
    )

}

export default Task