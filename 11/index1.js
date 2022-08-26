let listOfFlags = document.getElementById("list-flags");

const dataBendera = async () => {
    const url = "https://restcountries.com/v2/all"
    let response = await fetch(url);
    let result = await response.json();

    result.forEach((item) => {
        listOfFlags.innerHTML +=
        `<div>
            <img src="${item.flags.svg}" alt="" width="100"/>
            <h3>${item.name}</h3>

        </div>`;

    });
    console.log(result);
};
dataBendera()