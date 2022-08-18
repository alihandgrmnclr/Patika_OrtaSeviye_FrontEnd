import { useState } from "react";

function InputExample() {

    const [form, setForm] = useState({name:"", surname:""});    // formun içindeki name ve surname objesi
   
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value});   // form içindeki name ve surname değerlerini değiştiriyoruz
    };

  return (
    <div>
        Name <br/>
        <input name="name" type="text" value={form.name} onChange={onChangeInput}/><br/> {/*onChange komutuyla birlikte value'yi çekiyoruz */}

        Surname <br/>
        <input name="surname" type="text" value={form.surname} onChange={onChangeInput}/><br/>

        {form.name} {form.surname}
    </div>
  )
}

export default InputExample