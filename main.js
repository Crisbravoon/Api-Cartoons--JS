
const API = "https://api.sampleapis.com/cartoons/cartoons2D";

$("body").append(

    $.get(API, (res) => {
        let datos = res;
        // console.log(datos);
        for (const dato of datos) {
            $("body").append(`
            <div class= "col-6">
                <div class="card mx-auto mb-4" style="width: 18rem;">
                    <img src="${dato.image}" class="card-img-top" alt="...">
                    <div class="card-body mx-auto text-center">
                        <h5 class="card-title">${dato.title}</h5>
                        <li>
                            Creator: ${dato.creator}
                        </li>
                        <li> Gender: ${dato.genre}</li>
                    </div>
                </div>
            </div>
            `)
        }
    }));

