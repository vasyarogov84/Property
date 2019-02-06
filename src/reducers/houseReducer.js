export default function(state = null, action) {
    switch (action.type) {
      case "CURRENT_HOUSE":
        return action.payload;
  
      default:
        return state;
    }
  }