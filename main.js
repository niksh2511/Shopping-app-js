import { toggleSideNav, autoHideSideBar } from './modules/sideBarFunction';
import fetchData from './modules/fetchData';
import Display from './modules/Display';

const data = await fetchData('https://dummyjson.com/products');

const display = new Display(data.products);
display.displayProducts(data.products);
display.displayCategorysDropDown();

toggleSideNav();
autoHideSideBar();
