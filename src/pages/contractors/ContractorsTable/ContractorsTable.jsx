import React from 'react'
import { EnhancedTable } from '../../../components'

const ContractorsTable = () => {
	const headCells = [
		{
			id: 'id',
			numeric: false,
			disablePadding: true,
			label: 'Id',
		},
		{
			id: 'name',
			numeric: false,
			disablePadding: true,
			label: 'Name',
		},
		{
			id: 'last_name',
			numeric: false,
			disablePadding: false,
			label: 'Last name',
		},
		{
			id: 'phone',
			numeric: false,
			disablePadding: false,
			label: 'Phone',
		},
		{
			id: 'email',
			numeric: false,
			disablePadding: false,
			label: 'Email',
		},
		{
			id: 'address',
			numeric: false,
			disablePadding: false,
			label: 'address',
		},
	];

	const rows = [
		{
			id: 1,
			name: 'james',
			last_name: 'Brown',
			phone: '123-456-7890',
			email: 'james@james.com',
			address: '123 Main St',
		},
		{
			id: 2,
			name: 'james',
			last_name: 'Brown',
			phone: '123-456-7890',
			email: 'james@james.com',
			address: '123 Main St',
		},
		{
			id: 3,
			name: 'james',
			last_name: 'Brown',
			phone: '123-456-7890',
			email: 'james@james.com',
			address: '123 Main St',
		},
		{
			id: 4,
			name: 'james',
			last_name: 'Brown',
			phone: '123-456-7890',
			email: 'james@james.com',
			address: '123 Main St',
		}
	];

	return (
		<EnhancedTable
			headCells={headCells}
			rows={rows}
			initialOrderBy={'id'}	// name of the field that will prioritize the order
			initialOrder={'desc'} 	// 'asc' or 'desc'
		/>
	)
}

export default ContractorsTable
