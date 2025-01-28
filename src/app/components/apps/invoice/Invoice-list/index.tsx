"use client";
import React, { useContext, useState } from "react";
import { InvoiceContext } from "@/app/context/InvoiceContext/index";
import {
  Checkbox,
  Table,
  TextInput,
  Button,
  Modal,
  Badge,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function InvoiceList() {
  const { invoices, deleteInvoice } = useContext(InvoiceContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice: { billFrom: string; billTo: string; status: string }) => {
      return (
        (invoice.billFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          invoice.billTo.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (activeTab === "All" || invoice.status === activeTab)
      );
    }
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Calculate the counts for different statuses
  const Shipped = invoices.filter(
    (t: { status: string }) => t.status === "Shipped"
  ).length;
  const Delivered = invoices.filter(
    (t: { status: string }) => t.status === "Delivered"
  ).length;
  const Pending = invoices.filter(
    (t: { status: string }) => t.status === "Pending"
  ).length;

  // Toggle all checkboxes
  const toggleSelectAll = () => {
    const selectAllValue = !selectAll;
    setSelectAll(selectAllValue);
    if (selectAllValue) {
      setSelectedProducts(invoices.map((invoice: { id: any }) => invoice.id));
    } else {
      setSelectedProducts([]);
    }
  };

  // Toggle individual product selection
  const toggleSelectProduct = (productId: any) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((id: any) => id !== productId)
      );
    }
  };

  // Handle opening delete confirmation dialog
  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  // Handle confirming deletion of selected products
  const handleConfirmDelete = async () => {
    for (const productId of selectedProducts) {
      await deleteInvoice(productId);
    }
    setSelectedProducts([]);
    setSelectAll(false);
    setOpenDeleteDialog(false);
  };

  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between overflow-x-auto gap-6 ">
        {/* Summary sections */}
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-md hover:bg-lightmuted dark:hover:bg-lightprimary ${
            activeTab == "All" ? "bg-lightmuted dark:bg-lightprimary" : null
          }   `}
          onClick={() => handleTabClick("All")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-primary text-primary flex justify-center items-center">
            <Icon icon="tabler:align-box-right-stretch" height={25} />
          </div>
          <div>
            <h5 className="text-base">Total</h5>
            <p className="text-darklink">{invoices.length} invoices</p>
            <h6 className="text-sm">$46,218.04</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-md hover:bg-lightmuted dark:hover:bg-lightprimary ${
            activeTab == "Shipped" ? "bg-lightmuted dark:bg-lightprimary" : null
          }`}
          onClick={() => handleTabClick("Shipped")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-success text-success flex justify-center items-center">
            <Icon icon="tabler:shield" height={25} />
          </div>
          <div>
            <h5 className="text-base">Shipped</h5>
            <p className="text-darklink">{Shipped} invoices</p>
            <h6 className="text-sm">$23,110.23</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-md hover:bg-lightmuted dark:hover:bg-lightprimary ${
            activeTab == "Delivered" ? "bg-lightmuted dark:bg-lightprimary" : null
          }`}
          onClick={() => handleTabClick("Delivered")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-secondary text-secondary flex justify-center items-center">
            <Icon icon="tabler:map-pin" height={25} />
          </div>
          <div>
            <h5 className="text-base">Delivered</h5>
            <p className="text-darklink">{Delivered} invoices</p>
            <h6 className="text-sm">$13,825.05</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2  cursor-pointer p-5 rounded-md hover:bg-lightmuted dark:hover:bg-lightprimary ${
            activeTab == "Pending" ? "bg-lightmuted dark:bg-lightprimary" : null
          }`}
          onClick={() => handleTabClick("Pending")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-warning text-warning flex justify-center items-center">
            <Icon icon="tabler:camera-minus" height={25} />
          </div>
          <div>
            <h5 className="text-base">Pending</h5>
            <p className="text-darklink">{Pending} invoices</p>
            <h6 className="text-sm">$4,655.63</h6>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between my-6">
        <div>
          <TextInput
            id="dis"
            type="text"
            className="form-control"
            placeholder="search"
            value={searchTerm}
            icon={() => <Icon icon="tabler:search" height={18} />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button color={"primary"} className="sm:w-fit w-full rounded-md sm:mt-0 mt-4">
          <Link href="/apps/invoice/create">New Invoice</Link>
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox
                className="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </Table.HeadCell>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>BILL FROM</Table.HeadCell>
            <Table.HeadCell>BILL TO</Table.HeadCell>
            <Table.HeadCell>TOTAL COST</Table.HeadCell>
            <Table.HeadCell>STATUS</Table.HeadCell>
            <Table.HeadCell className="text-center">ACTION</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder">
            {filteredInvoices.map(
              (invoice: {
                id: any;
                billFrom: any;
                billTo: any;
                totalCost: any;
                status: any;
              }) => (
                <Table.Row key={invoice.id}>
                  <Table.Cell className="p-4">
                    <Checkbox
                      className="checkbox"
                      onChange={() => toggleSelectProduct(invoice.id)}
                      checked={selectedProducts.includes(invoice.id)}
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <h5 className="text-sm">{invoice.id}</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <h5 className="text-sm">{invoice.billFrom}</h5>
                  </Table.Cell>
                  <Table.Cell className="text-ld">{invoice.billTo}</Table.Cell>
                  <Table.Cell className="text-ld">
                    {invoice.totalCost}
                  </Table.Cell>
                  <Table.Cell>
                    {invoice.status === "Shipped" ? (
                      <Badge color="success" className="rounded-md">{invoice.status}</Badge>
                    ) : invoice.status === "Delivered" ? (
                      <Badge color="secondary" className="rounded-md">{invoice.status}</Badge>
                    ) : invoice.status === "Pending" ? (
                      <Badge color="warning" className="rounded-md">{invoice.status}</Badge>
                    ) : (
                      ""
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <div className="flex justify-center gap-3">
                      <Tooltip content="Edit Invoice" placement="bottom">
                        <Button className="btn-circle p-0 mb-2 bg-lightsuccess  text-success hover:bg-success hover:text-white">
                          <Link href={`/apps/invoice/edit/${invoice.billFrom}`}>
                            <Icon icon="tabler:pencil" height={18} />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content="View Invoice" placement="bottom">
                        <Button
                          color={"lightprimary"}
                          className="btn-circle p-0 mb-2"
                        >
                          <Link
                            href={`/apps/invoice/detail/${invoice.billFrom}`}
                          >
                            <Icon icon="tabler:eye" height={18} />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content="Delete Invoice" placement="bottom">
                        <Button
                          color={"lighterror"}
                          className="btn-circle p-0 mb-2"
                          onClick={() => {
                            setSelectedProducts([invoice.id]);
                            handleDelete();
                          }}
                        >
                          <Icon
                            icon="tabler:trash"
                            height={18}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
      <Modal
        show={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        size={"md"}
      >
        <Modal.Body>
          <p className="text-center text-lg text-ld">
            Are you sure you want to delete selected products?
          </p>
        </Modal.Body>
        <Modal.Footer className="mx-auto">
          <Button color="lighterror" onClick={handleCloseDeleteDialog}>
            Cancel
          </Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InvoiceList;
