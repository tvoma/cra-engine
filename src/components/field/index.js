'use client'

function Field({ type = 'text', label, ...args }) {
    return (
        <div className="form-field">
            <label className="form-label">{ label }</label>
            <input className="input input-solid input-lg input-ghost-secondary" type={ type } { ...args } />
        </div>
    )
}

export default Field
