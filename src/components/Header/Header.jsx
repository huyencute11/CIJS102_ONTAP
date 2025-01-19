import { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { tasks } from '../../data/mockData';

const Header = ({ listTasks, setTasks, openNewItemModal }) => {
    // Thực hiện lập trình chức năng tìm kiếm theo Title, description (Áp dụng cho phạm vi toàn bộ các cột To do - In Progress - In Review - Done)
    const [search, setSearch] = useState('')


    const handleSearchChange = (value) => {
        setSearch(value); // Cập nhật state của search
        if (value === '') {
            setTasks(tasks); // Nếu không có gì trong ô tìm kiếm, reset lại danh sách
        } else {
            const searchResult = listTasks.filter((task) =>
                task.title.toLowerCase().includes(value.toLowerCase()) ||
                task.description.toLowerCase().includes(value.toLowerCase())
            );
            setTasks(searchResult); // Cập nhật danh sách với kết quả tìm kiếm
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            alignItems: 'center'
        }}>
            <div style={{
                border: '1px solid',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                width: '20%',

            }}>
                <CiSearch fontSize={30} />
                <input
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        outline: 'none'
                    }}
                    placeholder='Search item'
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)} // Gọi hàm lọc khi giá trị thay đổi
                />
            </div>
            <div>
                <button style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: 'blue',
                    color: 'white',
                    marginLeft: '10px',
                    cursor: 'pointer'
                }}
                    onClick={openNewItemModal}
                >New Item</button>
            </div>
        </div>
    )
}

export default Header