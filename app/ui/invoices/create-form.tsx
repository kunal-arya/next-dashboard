'use client';

import { CustomerField } from '@/app/lib/definitions';
import { useFormState } from 'react-dom';
import { createInvoice } from '@/app/lib/actions';
import InvoiceForm from './form';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <InvoiceForm
      action={dispatch}
      state={state}
      customers={customers}
      defaultValues={{ amount: "", status: "", id: "", customer_id: "" }}
    />
  );
}
