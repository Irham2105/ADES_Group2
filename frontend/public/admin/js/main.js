const backendUrl = 'http://localhost:8081';

document.addEventListener("DOMContentLoaded", async function () {

    try {
        let response;
        response = await axios.get(backendUrl + '/getAllProducts');

        const data = response.data;
        console.log(data)


        for (var i = 0; i < data.length; i++) {
            const product = data[i];
            console.log(product)
            var listItem = `<li class="productListItem">
                <div class="productText">
                    <h4>` + product.name + `</h4>
                    <p>` + product.stockquantity + `</p>
                </div>
                <div class="buttons">
                    <a href="#"
                        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-pen fa-sm text-white-50" data-index="`+ i +`"></i> Edit</a>
                    <a href="#"
                        class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                            class="fas fa-minus fa-sm text-white-50" data-index="`+ i +`"></i> Delete</a>
                </div>
            </li>`
            $('#itemLists').append(listItem);
        }

    } catch (error) {
        console.error(error);
    }
})