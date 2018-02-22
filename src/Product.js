import React from 'react'
import './index.css'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editing: false}
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        this.remove = this.remove.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    }
    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.brandText.focus()
            this.refs.brandText.select()
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    }
    edit() {
        this.setState({editing: true})
    }
    save() {
        this.props.onChange(this.refs.brandText.value, this.props.id)
        this.setState({editing: false})
    }
    remove() {
        this.props.onRemove(this.props.id)
    }
    renderProductForm() {
        return (
            <div className="shoebox">
                <p className="label">Edit Brand:</p>
                <textarea ref="brandText"
                          defaultValue={this.props.children}></textarea>
                <button onClick={this.save}>save</button>
            </div>
        )
    }
    renderProductDisplay(shoes) {
        return (
            <div className="shoebox">
                <p className="label">Brand:</p>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}>edit</button>
                    <button onClick={this.remove}>delete</button>
                </span>
            </div>
        )
    }
    render() {
        return (this.state.editing) ? this.renderProductForm() : this.renderProductDisplay()
    }
}

export default Product
