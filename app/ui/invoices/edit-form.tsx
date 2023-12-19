'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import UpdateInvoiceForm from './form';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {

  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);

  return (
    <UpdateInvoiceForm
      isEdit
      action={dispatch}
      state={state}
      customers={customers}
      defaultValues={invoice}
    />
  );
}
