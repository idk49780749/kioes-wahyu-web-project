let listProduk = {
    data: [
        {
            nama: "indomie",
            harga: 3_500,
            tipe: "Foods",
            stok: 24,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlIShO1vYc9MUTMnbd0g2q3SZ9_vMMzYRhtL-uWngFDoQvpuvvhEPP0w&s"
        },
        {
            nama: "ultra milk",
            tipe: "Drinks",
            harga: 5_000,
            stok: 20,
            image: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/04/1217568.jpg?w=800&ssl=1"
        },
        {
            nama: "nutrisari",
            tipe: "Drinks",
            harga: 2_500,
            stok: 30,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvlIIEcO0SZxQ8zutjo8QcCEI5ER_aUh_UaAmrQBS7HTUvAyagPQmEhW9&s=10"
        },
        {
            nama: "aqua",
            tipe: "Drinks",
            harga: 5_000,
            stok: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGLQ_6h36eWcBCH_FyZvgTQ8mtEoVS-mLjewZv39TJvHJg8uR6YI4AaA&s"
        },
        {
            nama: "chitato",
            tipe: "Foods",
            harga: 4_000,
            stok: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfQuKCjQ7O8f200eAAw1a1Q8Ioudu-1aOv2ioBVAxYinnywpTtsr1pnoc&s=10"
        },
        {
            nama: "chocolatos",
            tipe: "Foods",
            harga: 2_500,
            stok: 30,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCbyrCg_RAJtSZxdA_0VragrusjXqQ7qc52BTDGlC4ioI725ZmzYb-_rV&s=10"
        },
        {
            nama: "qtela",
            tipe: "Foods",
            harga: 5_000,
            stok: 15,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0NIK2b5ud1cgTDS03BAVhVDw2M2v1iKQ6LjR5PWThtrLL0E_z3clgSA&s=10"
        },
        {
            nama: "dancow",
            tipe: "Drinks",
            harga: 3_000,
            stok: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9mMxQ0Ka_utxUY8jN591LF0mi6y01YC3PUqvFEDI0A&s"
        },
        {
            nama: "sosis so-nice",
            tipe: "Foods",
            harga: 21_900,
            stok: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8AHRe33I0FRGmWpgQpcYV68jV59wNk79S5RmCxcEEQ&s"
        },
        {
            nama: "sabun lux",
            tipe: "Household-Needs",
            harga: 3_000,
            stok: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEQ7N42Zk1JCHdJUG5lm0flzZ5hHz3d3vuP48sJl7qA&s"
        },
        {
            nama: "ciptadent",
            tipe: "Household-Needs",
            harga: 5_000,
            stok: 15,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycJOjSShkc_mZgmG0Q8rfc0db6n1DnU9o1aNtRcywfQ&s"
        },
        {
            nama: "sillete london",
            tipe: "Household-Needs",
            harga: 2_500,
            stok: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95CO2CqN7D9jJBsbTFSjW8t215JW2tYQScVHHcSi-qA&s"
        }
    ]
};

for (let i of listProduk.data) {
    //create card
    let card = document.createElement("div");
    card.classList.add("card", i.tipe, "bottom-rev", "hide");

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //body card
    let bodyCard = document.createElement("div");
    bodyCard.classList.add("body-card");

    //product name
    let name = document.createElement("h5");
    name.classList.add("card-text");
    name.innerText = i.nama.toUpperCase();
    bodyCard.appendChild(name);

    //harga
    let price = document.createElement("h6");
    price.innerText = "Rp." + i.harga;
    bodyCard.appendChild(price);

    card.appendChild(bodyCard);
    document.getElementById("js-listProduk").appendChild(card);
}

// parameters
function filterProduct(value) {
    // button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => button.classList.remove("active"));

    // check if value equals innertext
    buttons.forEach(button => {
        if (value == button.innertext) {
            button.classList.add("active");
        } else if (!button.classList.contains("active")) {
            console.log("kok gk bisa yh?");
        } else {
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");

    // loop through all cards
    elements.forEach(element => {
        // display all card on "all" button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            // check if element contains category class
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                // hide other class
                element.classList.add("hide");
            }
        }
    });
}

// initially display all products
window.onload = () => {
    filterProduct("all");
};
