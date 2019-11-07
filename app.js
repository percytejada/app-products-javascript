 // Diseñaremos una clase para nuestra interfaz y una para el producto

 class Product {
     constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
     }
 }

 class UI {
     
    addProduct(product) {
        const productList = d.getElementById('product-list');
        const element = d.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        // this.resetForm
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product delete succesfully', 'danger')
        }
    }

    showMessage(message, cssClass) {
        const div = d.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`
        div.appendChild(d.createTextNode(message))
        // showing in DOM
        const container = d.querySelector('.container');
        const app = d.querySelector('#app')
        container.insertBefore(div, app)

        setTimeout(() => {
            d.querySelector('.alert').remove();
        }, 2000);
    }

    resetForm() {
        d.getElementById('product-form').reset();
    }
 }

 // DOM Events
const d = document

d.getElementById('product-form').addEventListener('submit', (e) => {
    const name = d.getElementById('name').value,
    price = d.getElementById('price').value,
    year = d.getElementById('year').value;
    
    const product = new Product(name,price,year);
    
    const ui = new UI();

    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Complete fields please', 'danger')
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto Agregado satisfactoriamente', 'success')

    e.preventDefault();
})



d.getElementById('product-list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target)
})
  