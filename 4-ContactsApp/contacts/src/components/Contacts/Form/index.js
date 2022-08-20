import { useState, useEffect } from 'react'


const initialFormValues = { fullName: "", phoneNumber: "" };    // varsayılan form değerleri
function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

    useEffect(() => {
        setForm(initialFormValues);         // contacts bilgisi değiştiğinde input değerlerini sıfırlıyoruz
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (event) => {           // submit işleminde e.prevent kullandık
        event.preventDefault();

        if (form.fullName === "" || form.phoneNumber === "") {      // isim veya numara boşsa çalışmaz
            return false;
        }
        addContact([...contacts, form]);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullName" value={form.fullName} placeholder='Full Name' onChange={onChangeInput} />
            </div>
            <div>
                <input name="phoneNumber" value={form.phoneNumber} placeholder='Phone Number' onChange={onChangeInput} />
            </div>
            <button >Add</button>
        </form>
    )
}

export default Form;