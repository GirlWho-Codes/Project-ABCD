import { DataTable, Layout } from "../components";
import Image from "next/image";
import ToyAvatar from '../assets/img/toy-avatar.png'
import person1 from '../assets/img/person1.png'
import { AvatarGroup } from "@mui/material";
import { useMemo } from "react";
import { GroupAvatars } from "../components/Avatars";


export default function RolesAndPriviledges() {
    const RoleComponent = ({role}) => {
        return (
            <div className="p-3 col-span-1 rounded-xl h-full border-2 border-[#F7F5E4]">
                <h3 className="mb-5 text-[#0B0B0B] text-lg md:text-xl lg:text-xl font-[500] lg:leading-[30px]">{role}</h3>
                <GroupAvatars />
                <p className="text-[#676767]">3 accounts</p>
            </div>
        )
    }
    const EnabledBtn = () => <button className="bg-[#4AAE8C] px-10 py-2 rounded-lg text-white center">Enabled</button>
    const DisabledBtn = () => <button className="bg-[#CF4655] px-10 py-2 rounded-lg text-white center">Enabled</button>

    const columns = useMemo(() => [
        {
            Header: 'Role',
            accessor: 'role',
            Cell: ({value}) => <span className="text-[#16192C] text-base font-medium">{value}</span>
        },
        {
            Header: 'Support',
            accessor: 'support',
            Cell: ({value}) => {
                return value ? (
                    <EnabledBtn />
                ) : (
                    <DisabledBtn />
                )
            }
        },
        {
            Header: 'Reconcilation',
            accessor: 'reconcilation',
            Cell: ({value}) => {
                return value ? (
                    <EnabledBtn />
                ) : (
                    <DisabledBtn />
                )
            }
        },
        {
            Header: 'Testing',
            accessor: 'testing',
            Cell: ({value}) => {
                return value ? (
                    <EnabledBtn />
                ) : (
                    <DisabledBtn />
                )
            }
        },
    ], [])

    const data = useMemo(() => [
        { role: 'Super Admin', support: true, reconcilation: true, testing: true },
        { role: 'Account Admin', support: false, reconcilation: true, testing: false },
        { role: 'Account User', support: false, reconcilation: false, testing: true },
    ], [])

    return (
        <Layout title={'Roles and Priviledges'}>
            <div>
                <h3 className="text-[#191716] font-medium text-sm md:text-base lg:text-lg xl:text-xl tracking-[-0.025em] xl:leading-[48px] mt-1 lg:mt-3">Administrator Roles</h3>
                <p className="text-[#333333] text-base tracking-[-0.025em] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 lg:gap-5 mt-5 lg:mt-10">
                <RoleComponent role={'Super Administrator'} />
                <RoleComponent role={'Implementor'} />
                <RoleComponent role={'Tester'} />
                <div className="p-5 col-span-1 flex flex-col items-center justify-center gap-5 rounded-xl h-full border-2 border-[#F7F5E4]">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 0.285156C14.9468 0.285156 15.7143 1.05267 15.7143 1.99944V12.2852H26C26.9468 12.2852 27.7143 13.0527 27.7143 13.9994C27.7143 14.9462 26.9468 15.7137 26 15.7137H15.7143V25.9994C15.7143 26.9462 14.9468 27.7137 14 27.7137C13.0532 27.7137 12.2857 26.9462 12.2857 25.9994V15.7137H1.99999C1.05322 15.7137 0.285706 14.9462 0.285706 13.9994C0.285706 13.0527 1.05322 12.2852 1.99999 12.2852H12.2857V1.99944C12.2857 1.05267 13.0532 0.285156 14 0.285156Z" fill="#FF4500" />
                        </svg>
                    </span>
                    <h3 className="mb-5 text-[#0B0B0B] text-base md:text-lg lg:text-xl font-normal lg:leading-[30px]">Add new role</h3>
                </div>
            </div>

            <div>
                <h3 className="text-[#191716] font-medium text-sm md:text-base lg:text-lg xl:text-xl tracking-[-0.025em] xl:leading-[48px] mt-1 lg:mt-3">Permissions </h3>
                <p className="text-[#333333] text-base tracking-[-0.025em] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                    dictum est a, mattis tellus. Sed dignissim, metus nec fringilla.
                </p>
                <div className="w-full py-5">
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </Layout>
    )
}