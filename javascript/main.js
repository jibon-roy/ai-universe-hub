
const getAiData = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await response.json();
        const allData = data.data.tools;
        console.log(allData);
        showContentHandaler(allData);
    }
    catch (err) {
        console.log(err)
    }
}

const showContentHandaler = (allData) => {

    // load id of show-container
    const showContainer = document.getElementById('show-container');

    allData.forEach(element => {

        const items = document.createElement('div');

        items.innerHTML = `
        <div class="card card-compact h-full rounded-md bg-base-100 shadow-xl">
            <figure>
            ${element?.image ? `<img class="rounded-xl h-52" id="" src="${element.image}" /></figure>` : ''}
                <div class="card-body p-5">
                <h2 class="card-title text-black text-xl font-bold my-4">Features</h2>
                <p>1. ${element?.features[0] != null ? element.features[0] : 'No features'}</p>
                <p>2. ${element?.features[1] != null ? element.features[1] : 'No features'}</p>
                <p>3. ${element?.features[2] != null ? element.features[2] : 'No features'}</p>
                <hr class="my-3 border-2 border-gray-200">
                <div class="card-actions flex justify-between items-center">
                <div class="flex-col gap-8">
                <h3 class="text-xl font-bold">${element?.name}</h3>
                <date class="text-[#585858] font-medium my-5 gap-2"><i class="fa-regular fa-calendar-days"></i> ${element?.published_in}</date>
                </div>
                <button class="rounded-full h-10 w-10 text-[#EB5757] p-2 bg-[#FEF7F7;]"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        `;
        showContainer.appendChild(items);
    });
}

getAiData();
