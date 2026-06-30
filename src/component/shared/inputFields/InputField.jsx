

const InputField = ({name, placeholder, type="text", label}) => {
  return (
    <div className="w-full flex text-sm md:text-base">
      <label htmlFor={name} className='w-1/3 text-center py-2 bg-(--primary) border border-(--primary)'>{label}</label>

      <input type={type} name={name}id={name} placeholder={placeholder} className='px-3 py-2 outline-none border border-(--primary) w-full bg-(--dark)'/>
    </div>
  );
};

export default InputField;