class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello! How can I assist you with the library?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleReturnPolicy = () => {
      const message = this.createChatBotMessage(
        "All borrowed books must be returned within **10 days**. Failure to do so may result in late fees."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleBookRequest = () => {
      const message = this.createChatBotMessage(
        "To request a book, search for the book in the catalog and click the 'Request' button. The admin will process your request, and you will be notified when it's ready for pickup."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleBorrowLimit = () => {
      const message = this.createChatBotMessage(
        "You can borrow up to **5 books** at a time. If you need more, return some books before requesting new ones."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleLateFees = () => {
      const message = this.createChatBotMessage(
        "If a book is returned after **10 days**, an extra charge may be applied. The fee depends on the delay period."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleBookRecommendations = () => {
      const message = this.createChatBotMessage(
        "Pustak Prabandha uses a **content-based filtering algorithm** to recommend books based on your reading history and preferences."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleIssueProcess = () => {
      const message = this.createChatBotMessage(
        "To issue a book, first request it through the system. Once approved, visit the library to collect the book. You can track issued books under your account."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleTrackBooks = () => {
      const message = this.createChatBotMessage(
        "To track issued books, log in to your account and navigate to 'My Books'. Here, you can see due dates and renewal options."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleLostBook = () => {
      const message = this.createChatBotMessage(
        "If you lose a book, please inform the library admin immediately. You may need to pay a replacement fee or provide an alternative copy."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleLibraryRules = () => {
      const message = this.createChatBotMessage(
        "Library rules include:\n- Return books on time (within 10 days)\n- Handle books with care\n- Maximum of 5 borrowed books at a time\n- Follow borrowing and request procedures."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleRestrictedQuestions = () => {
      const message = this.createChatBotMessage(
        "I'm here to assist you with library-related queries. I can't answer questions about the project's architecture or technical implementation."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    defaultResponse = () => {
      const message = this.createChatBotMessage(
        "I'm not sure I understand. Try asking about book borrowing, requests, return policies, or library rules."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  