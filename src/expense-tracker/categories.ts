/**
 * So that we're not dependant on the order the modules are imported.
 * this separate module for the category solves that.
 */
const categories = ["Groceries", "Utilities", "Entertainment",] as const; // so that zods enum can read it as readonly

export default categories;