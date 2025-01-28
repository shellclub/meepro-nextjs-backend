"use client";
import React from 'react'
import TitleCard from '../../shared/TitleBorderCard'
import { Tabs, Label, TextInput, Select, Datepicker, Button } from 'flowbite-react'

const FormWithTabs = () => {
  return (
    <div>
      <TitleCard title='Form With Tabs'>
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" className="gap-[1.25rem]">
          <Tabs.Item active title="Personal Info">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="firstname" value="First Name" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="firstname"
                      type="text"
                      placeholder="John"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="country" value="Country" />
                  </div>
                  <div className="col-span-9">
                    <Select id="gender" required className="select-md">
                      <option>India</option>
                      <option>Europe</option>
                      <option>Franch</option>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="birthdate" value="Birth Date" />
                  </div>
                  <div className="col-span-9">
                    <Datepicker className="form-control" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="lastname" value="Last Name" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="lastname"
                      type="text"
                      placeholder="Deo"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="language" value="Language" />
                  </div>
                  <div className="col-span-9">
                    <Select id="gender" required className="select-md">
                      <option>English</option>
                      <option>Franch</option>
                      <option>Spanish</option>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="phone" value="Phone No" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="phone"
                      type="text"
                      placeholder="958 1475 458"
                      sizing="md"
                 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
              <Button type="submit" color="primary" >
                Submit
              </Button>
              <Button type="reset" color="error" >
                Cancel
              </Button>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Account Details">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="username" value="Username" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="username"
                      type="text"
                      placeholder="John.Deo"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="password" value="Password" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="password"
                      type="text"
                      placeholder="john.deo"
                      sizing="md"
                 
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="email"
                      type="text"
                      placeholder="john.deo@example.com"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="confirm" value="Confirm" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="confirm"
                      type="text"
                      placeholder="john.deo"
                      sizing="md"
                 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
              <Button type="submit" color="primary" >
                Submit
              </Button>
              <Button type="reset" color="error" >
                Cancel
              </Button>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Social Links">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="twitter" value="Twitter" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="twitter"
                      type="text"
                      placeholder="https://twitter.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="google" value="Google" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="google"
                      type="text"
                      placeholder="https://plus.google.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="instagram" value="Instagram" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="instagram"
                      type="text"
                      placeholder="https://instagram.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12 flex flex-col gap-[1.875rem]">
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="facebook" value="Facebook" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="facebook"
                      type="text"
                      placeholder="https://facebook.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="linkedin" value="Linkedin" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="linkedin"
                      type="text"
                      placeholder="https://linkedin.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7 items-center">
                  <div className="col-span-3">
                    <Label htmlFor="quora" value="Quora" />
                  </div>
                  <div className="col-span-9">
                    <TextInput className="form-control"
                      id="quora"
                      type="text"
                      placeholder="https://quora.com/abc"
                      sizing="md"
                 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
              <Button type="submit" color="primary" >
                Submit
              </Button>
              <Button type="reset" color="error" >
                Cancel
              </Button>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
      </TitleCard>
    </div>
  )
}

export default FormWithTabs
