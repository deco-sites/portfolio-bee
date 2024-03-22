export interface Props {
  email: string;
  subject: {
    text: string;
    placeholder: string;
  };
  message: {
    text: string;
    placeholder: string;
  };
}

function EmailMe({ email, message, subject }: Props) {
  return (
    <div class="flex flex-col max-w-[1300px] m-auto w-11/12 gap-4 py-8 text-secondary">
      <h2 class="text-center text-4xl font-bold">Send me an email</h2>
      <form
        action={`mailto:${email}`}
        method="post"
        enctype="text/plain"
        class="flex flex-col gap-4 w-full m-auto max-w-[800px]"
      >
        <div class="flex flex-col gap-4">
          <label for="subject">{subject.text}</label>
          <input
            class="bg-transparent border border-secondary rounded-2xl p-4"
            type="text"
            id="subject"
            name="subject"
            placeholder={subject.placeholder}
            required
          />
        </div>
        <label for="message">{message.text}</label>
        <textarea
          class="bg-transparent border border-secondary rounded-2xl p-4"
          id="message"
          name="body"
          placeholder={message.placeholder}
          rows={4}
          cols={50}
          required
        />
        <button
          class="m-auto btn-outline btn-circle w-[100px] border border-secondary bg-transparent rounded-lg"
          type="submit"
        >
          Enviar Email
        </button>
      </form>
    </div>
  );
}

export default EmailMe;
