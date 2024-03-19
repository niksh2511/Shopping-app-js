import firstChartToUpperCase from './firstChartToUpperCase';
import roundUpRating from './roundUpRating';

class Display {
  data;
  categorys = [];
  selectedCategorys = [];
  listOfFilterArr = [];

  constructor(data) {
    this.data = data;
  }

  displayProducts(data) {
    const productsElem = $('#products-page');

    productsElem.empty();

    data.forEach((product) => {
      productsElem.append(`
            <div class="bg-gray-100 h-64 sm:rounded-lg sm:hover:drop-shadow-lg">
            <div>
                <img class="h-250px w-full object-cover rounded-t-lg"
              src=${product.thumbnail} />
            </div>
            <div class="p-3">
              <div>
                <div class="h-30px overflow-hidden"><span class="font-semibold">${
                  product.brand
                }</span><span> - ${product.description}</span></div>
                <div class="mt-3 bg-red-700 max-w-fit py-1 px-3 text-white font-semibold">-${
                  product.discountPercentage
                }%</div>
              </div>
              <div class="flex pt-1 items-center">
                ${roundUpRating(product.rating)}
                <div class="flex-1"></div>
                <div class="font-bold text-sky-500 pt-2 text-lg"> &#8377; ${
                  product.price
                }</div>
              </div>
            </div>
          </div>
                `);
    });
  }

  displayCategorysDropDown() {
    this.data.forEach((product) => {
      if (!this.categorys.includes(product.category))
        this.categorys.push(product.category);
    });

    const categorysDropDown = $('#categorys-dropdown');

    categorysDropDown
      .empty()
      .append("<option value='' selected disabled>Category</option>");

    this.categorys.forEach((catergory) => {
      categorysDropDown.append(
        `<option value=${catergory}>${firstChartToUpperCase(
          catergory
        )}</option>`
      );
    });

    categorysDropDown.change((e) => {
      this.addToSelectedCategorys(e.target.value);
    });
  }

  addToSelectedCategorys(category) {
    if (!this.selectedCategorys.includes(category)) {
      this.selectedCategorys.push(category);

      //add the category to the badge part of HTML
      $('#badges').append(`
      <div class="inline-block my-1" id="badge-${category}">
        <span class="text-sm rounded-full border-gray-900 border-2 py-1 px-3 flex items-center max-w-fit">
          <div>${category}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="h-5">
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </span>
      </div>`);

      $(`#badge-${category}`).click(() => {
        // when user click of badges remove the badges
        this.selectedCategorys = this.selectedCategorys.filter(
          (currCategory) => currCategory !== category
        );
        $(`#badge-${category}`).remove();
        this.filterList();
      });

      // refresh HTML
      this.filterList();
    }
  }

  filterList() {
    this.listOfFilterArr = this.data.filter((product) =>
      this.selectedCategorys.includes(product.category)
    );

    if (this.listOfFilterArr.length !== 0)
      this.displayProducts(this.listOfFilterArr);
    else this.displayProducts(this.data);
  }
}

export default Display;
