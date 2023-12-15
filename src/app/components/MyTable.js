import { Table } from '@radix-ui/themes'

const defaultColumns = [
  {
    title: 'Build Name',
    key: 'title',
  },
  {
    title: 'Price Range',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'img',
  },
  {
    title: 'Details',
    key: 'description',
  },
]

const defaultRecords = [
  {
    title: 'Test Entry',
    subtitle: 'Test Description',
    img: '',
    description: 'Test Details',
  },
]

export default function MyTable({ columns = defaultColumns, records = defaultRecords }) {
  return (
    <Table.Root className='m-6'>
      <Table.Header className='text-gray-300'>
        <Table.Row className='text-gray-300'>
          {columns.map((column, idx) => (
            <Table.ColumnHeaderCell className='text-gray-300' key={idx}>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body >
        {records.map((record) => (
          <Table.Row className='text-gray-300' key={record.id}>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell key={`${record.id}-${idx}`}>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell key={`${record.id}-${idx}`}>{record[column.key]}</Table.Cell>
              ),
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
