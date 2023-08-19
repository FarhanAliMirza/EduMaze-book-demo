const InputForm = (props) => {
  const input =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer";
  // text grey-900 border-gray-400
  const label =
    "peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
  return (
    <form>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_name"
          id="floating_name"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_name" class={label}>
          Name
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_email" class={label}>
          Email address
        </label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_phone" class={label}>
            Phone number
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_phone" class={label}>
            Parent's number
          </label>
        </div>
      </div>
      <label
        for="class"
        class="block mb-2 text-sm font-medium text-gray-400 peer-focus:text-gray-500"
      >
        Select your class
      </label>
      <select
        id="class"
        class="bg-transparent mb-6 border-gray-400 border-2 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 placeholder-gray-400 block w-full p-2.5 peer"
      >
        <option>Class-X (ICSE)</option>
        <option>Class-X (CBSE)</option>
        <option>Class-XII (ISC)</option>
        <option>Class-XII (CBSE)</option>
      </select>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
