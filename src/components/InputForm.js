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
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_password" class={label}>
          Password
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_repeat_password" class={label}>
          Confirm password
        </label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_first_name" class={label}>
            First name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_last_name" class={label}>
            Last name
          </label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_phone" class={label}>
            Phone number (123-456-7890)
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            class={input}
            placeholder=" "
            required
          />
          <label for="floating_company" class={label}>
            Company (Ex. Google)
          </label>
        </div>
      </div>
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
