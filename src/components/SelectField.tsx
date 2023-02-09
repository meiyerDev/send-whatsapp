import { FC, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Array<Option>;
  value: string;
  onChange: (value: string) => void;
};

export const SelectField: FC<Props> = ({ label, options, value, onChange }) => {
  const [query, setQuery] = useState('');
  const [localValue, setLocalValue] = useState<Option | undefined>(options.find((option) => option.value === value));

  const filteredOptions =
    query === ''
      ? options
      : options.filter((person) => {
          return (
            person.label.toLowerCase().includes(query.toLowerCase()) ||
            person.value.toLowerCase().includes(query.toLowerCase())
          );
        });

  const handleSelect = (value: Option) => {
    setLocalValue(value);
    onChange(value.value);
  };

  return (
    <Combobox as='div' value={localValue} onChange={handleSelect}>
      <Combobox.Label className='block text-left text-sm font-medium text-gray-700'>{label}</Combobox.Label>
      <div className='relative mt-1'>
        <Combobox.Input
          className='w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm'
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option?: Option) => option?.label || ''}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </Combobox.Button>

        {filteredOptions.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredOptions.map((row) => (
              <Combobox.Option
                key={`${row.label}__${row.value}`}
                value={row}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-emerald-600 text-white' : 'text-gray-900',
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{row.label}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-emerald-600',
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
