const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-2xl text-center">Contact Us</h1>
      <div>
        <form className="w-3/12 mx-auto right-0 left-0 p-12">
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg w-full"
            placeholder="name"
          ></input>
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg w-full"
            placeholder="Phone number"
          ></input>
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg w-full"
            placeholder="description"
          ></input>
          <button className="p-2 m-4 border border-black rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
