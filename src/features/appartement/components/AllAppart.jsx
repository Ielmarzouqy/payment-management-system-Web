// import { useGetAllApartmentsQuery } from "../redux/apartmentApiSlice";

import { useState } from "react";
import { useDeleteApartmentMutation, useGetAllApartmentsQuery } from "../redux/apartmentApiSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function AllAppart(){

  console.log("data")

    const { data } = useGetAllApartmentsQuery();

    const [deleteApartment] = useDeleteApartmentMutation();

  
    console.log(data);
    const [deletedApartmentId, setDeletedApartmentId] = useState(null);


    const handleDeleteApartment = async (apartmentId) => {
      try {
        const response = await deleteApartment(apartmentId).unwrap();
        console.log("Apartment deleted successfully", response);
        setDeletedApartmentId(apartmentId); 
        
        Swal.fire({
          title: 'Deleted success!',
          text: 'The Apartment deleted.',
          icon: 'success',
        });
        
        // Optional: Update component state if needed
      } catch (error) {
        console.error("Failed to delete apartment", error);
      }
    };

    return (
        <>
            <div className="relative bg-white w-full overflow-auto">
  <table className="caption-bottom text-sm w-full">
    <thead className="[&amp;_tr]:border-b">
      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Apartment Name
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Location
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Rent
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Bedrooms
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Availability
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="[&amp;_tr:last-child]:border-0">
    {data &&
              data.apartments.map((apartment) => (

      <tr key={apartment.id}  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        {/* <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{apartment.name}</td> */}

        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
              <img
                src={apartment.image}
                width="64"
                height="64"
                alt="Apartment image"
                className="aspect-square rounded-md object-cover"
              />
        </td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{apartment.location}</td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{apartment.price}</td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{apartment.room}</td>

        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <span style={{ color: apartment.isAvailable ? "green" : "red" }}>

          {apartment.isAvailable ? "Available" : "Not Available"}
          </span>
          </td>

        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
          <button 
          // onClick={updateApart(apartment._id)}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
            </svg>
          </button>
                    <Link to={`/apartment/editapartment/${apartment._id}`}>edit</Link>

          <button 
          onClick={() => handleDeleteApartment(apartment.id)}
          // onClick={}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
              <line x1="18" x2="12" y1="9" y2="15"></line>
              <line x1="12" x2="18" y1="9" y2="15"></line>
            </svg>
          </button>
          {/* <Link ref={apartment._id} ></Link> */}
        </td>
      </tr>
     
              ))}
    </tbody>
  </table>
</div>
        </>
    )
}