import React from 'react';
import axios from 'axios';





export default class InsertProduct extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`/api/admin/product/insert`, {
            "name": document.getElementById("name").value,
            "desc": document.getElementById("desc").value,
            "price": document.getElementById("price").value,
            "img": document.getElementById("img").value,
            "type": document.getElementById("product").value,
            "category": document.getElementById("category").value
        })
        this.props.history.push(`/admin/products`);
        window.location.reload();
      }

    render() {

        return (
            <div> <br /> <br />

                <h2>Insert Product</h2> <br /> <br />

                <form onSubmit={this.handleSubmit}>

                    <label for="name">Name : &nbsp;</label>
                    <input type="text" id="name" className="form-control" placeholder="Name"></input>
                    <br /> <br />

                    <label for="desc">Description : &nbsp;</label>
                    <textarea id="desc" className="form-control" placeholder="Decription" cols="25" rows="10"></textarea>
                    <br /> <br />

                    <label for="price">Price : &nbsp;</label>
                    <input type="number"  className="form-control" id="price" min="0" step="any" placeholder="6.99"></input> <br /> <br />

                    <label for="img">Image File : &nbsp;</label>
                    <input type="text" className="form-control" id="img" placeholder="/img/img1.jpg"></input> <br /> <br />

                    <label for="product">Type : &nbsp;</label>
                    <select id="product" className="form-control">
                        <option value="true">Game</option>
                        <option value="false">Software</option>
                    </select>


                    <br /> <br />

                    <label for="category">Category : &nbsp;</label>
                    <select id="category" className="form-control">
                        <option value="FPS" selected="selected">FPS</option>
                        <option value="RPG">RPG</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Internet">Internet</option>
                        <option value="Communication">Communication</option>
                        <option value="Productivity">Productivity</option>
                    </select>

                    <br /> <br />

                    <input type="submit" className="btn btn-info" value="Insert"></input>
                </form>


            </div>
        )

    }

}