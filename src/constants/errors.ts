export const ERRORS = {
    add: {
      empty: "The card phrase cannot be empty",
      duplicate: "That phrase already exists",
      generic: "Unexpected error adding card",
      maxLength:"Cannot exceed 30 characters" ,
      minLength:"Card must be at least 2 long"
    },
    fetch: {
      generic: "Unexpected error fetching cards",
      empty:"No available cards"
    },
    delete: {
        generic:"Error deleting card"
    }
  };