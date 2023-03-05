import { createContext } from "react";

export default createContext({
	pageNumber : 0,
	handlePageNumber : () => {},
	handleMode: () => {},
	drawerOpen : false,
	setOpenDrawer: () => {}
});