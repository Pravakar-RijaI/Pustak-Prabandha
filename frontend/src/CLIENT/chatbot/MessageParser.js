class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerMessage = message.toLowerCase();
  
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        this.actionProvider.handleHello();
      } else if (lowerMessage.includes("return policy") || lowerMessage.includes("return period")) {
        this.actionProvider.handleReturnPolicy();
      } else if (lowerMessage.includes("how to request a book") || lowerMessage.includes("request a book")) {
        this.actionProvider.handleBookRequest();
      } else if (lowerMessage.includes("borrow limit") || lowerMessage.includes("how many books can i borrow")) {
        this.actionProvider.handleBorrowLimit();
      } else if (lowerMessage.includes("late fees") || lowerMessage.includes("extra charge")) {
        this.actionProvider.handleLateFees();
      } else if (lowerMessage.includes("personalized recommendations") || lowerMessage.includes("book suggestions")) {
        this.actionProvider.handleBookRecommendations();
      } else if (lowerMessage.includes("issue a book") || lowerMessage.includes("how to get a book")) {
        this.actionProvider.handleIssueProcess();
      } else if (lowerMessage.includes("track issued books") || lowerMessage.includes("check my books")) {
        this.actionProvider.handleTrackBooks();
      } else if (lowerMessage.includes("lost book") || lowerMessage.includes("what if i lose a book")) {
        this.actionProvider.handleLostBook();
      } else if (lowerMessage.includes("library rules") || lowerMessage.includes("guidelines")) {
        this.actionProvider.handleLibraryRules();
      } else if (lowerMessage.includes("project architecture") || lowerMessage.includes("how is it built")) {
        this.actionProvider.handleRestrictedQuestions();
      } else {
        this.actionProvider.defaultResponse();
      }
    }
  }
  
  export default MessageParser;
  