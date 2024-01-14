"use client";

import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  Tabs,
  TextInput,
  Textarea,
} from "flowbite-react";
import { formSchema, mappedFormOptions } from "../validations/formSchema";

import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { array } from "zod";

type Inputs = {
  company: string;
  center: string;
  employees: string;
  workingEmployees: { employee: string }[];
  typeOfCages: string;
  loberoThread: string;
  date: string;
  rope: string;
  gasoline: number;
  oil: number;
  others: string;
  startTime: string;
  endTime: string;
  inCharges: string;
  workTypes: string;
  registrationNumber: string;
  ships: string;
  workDetail: string;
  observations: string;
};

interface OptionElements {
  [key: string]: JSX.Element[];
}

const generateOptions = (mappedData: { [key: string]: any }) => {
  const options: JSX.Element[] = [];
  Object.entries(mappedData).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Handle nested objects (e.g., mappedShips)
      options.push(
        <option value={key} key={key}>
          {value.name}
        </option>
      );
    } else {
      // Handle direct string mappings
      options.push(
        <option value={key} key={key}>
          {value}
        </option>
      );
    }
  });
  return options;
};

/* return an objectt of array of jsx componets from mappedFormOptions*/
const allOptions = Object.entries(mappedFormOptions).reduce<OptionElements>(
  (acc, [key, value]) => {
    acc[key] = generateOptions(value);
    return acc;
  },
  {}
);

console.log(allOptions);

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: { workingEmployees: [{ employee: "0" }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workingEmployees",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);

  const getErrorProps = (fieldName: keyof Inputs) => {
    const errorMessage = errors[fieldName]?.message;
    return errorMessage
      ? {
          color: "failure", // Establece el color a 'failure' si hay un error
          helperText: errorMessage, // Muestra el mensaje de error
        }
      : {};
  };

  return (
    <>
      <h2 className="text-xl font-bold text-center text-gray-900 sm:text-2xl lg:text-4xl xl:text-5xl mt-6">
        Fomulario de Reporte de trabajo
      </h2>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        {/* create a form whit empresa, centro, tipode jaula . fecha  */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Empresa" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-2 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="empresa" value="Empresa" />
                </div>
                <Select
                  id="empresa"
                  {...register("company")}
                  {...getErrorProps("company")}
                >
                  <option value="0" className="text-gray-500 ">
                    Seleccione Empresa
                  </option>
                  {allOptions.companies}
                </Select>
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="centro" value="Centro" />
                </div>
                <Select
                  id="center"
                  {...register("center")}
                  {...getErrorProps("center")}
                >
                  <option value="0">Seleccione Centro</option>
                  {allOptions.center}
                </Select>
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="typeOfCages" value="Tipo de jaula" />
                </div>
                <Select
                  id="typeOfCages"
                  {...register("typeOfCages")}
                  {...getErrorProps("typeOfCages")}
                >
                  <option value="0">Seleccione Tipo de Jaula</option>
                  {allOptions.typeOfCages}
                </Select>
              </div>
              {/* formularion para fecha  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="date" value="Fecha" className="block " />
                </div>

                <TextInput
                  type="date"
                  id="date"
                  width={18}
                  {...register("date")}
                  {...getErrorProps("date")}
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>

        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Materiales" active={true} className="block">
            {/* titulo de formulario */}
            {/* TODO: make a select list to add diffrents kinds of materials from allOptions.materials */}

            {}

            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-3 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="loberoThread" value="Hilo Lobero" />
                </div>
                <TextInput
                  id="loberoThread"
                  type="text"
                  placeholder="Indique Cantidad de Hilo"
                  {...register("loberoThread")}
                  {...getErrorProps("loberoThread")}
                />
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="gasoline" value="Bencina" />
                </div>
                <TextInput
                  id="gasoline"
                  placeholder="Ingrese Bencina"
                  type="number"
                  {...register("gasoline")}
                  {...getErrorProps("gasoline")}
                />
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="oil" value="Cantidad de Petróleo" />
                </div>
                <TextInput
                  id="oil"
                  type="number"
                  placeholder="Cantidad de Petróleo"
                  {...register("oil")}
                  {...getErrorProps("oil")}
                />
              </div>
              {/* formularion para fecha  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="others" value="Otros" />
                </div>
                <TextInput
                  id="others"
                  type="text"
                  placeholder="Otros"
                  {...register("others")}
                  {...getErrorProps("others")}
                />
              </div>
              {/* hora de inicio y hora de termino */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="startTime" value="Hora de Inicio" />
                </div>
                <TextInput
                  id="startTime"
                  type="time"
                  {...register("startTime")}
                  {...getErrorProps("startTime")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="endTime" value="Hora de Término" />
                </div>
                <TextInput
                  id="endTime"
                  type="time"
                  {...register("endTime")}
                  {...getErrorProps("endTime")}
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Datos Embarcación" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-2 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="inCharges" value="Encargado" />
                </div>
                <Select
                  id="inCharges"
                  {...register("inCharges")}
                  {...getErrorProps("inCharges")}
                >
                  <option value="0">Seleccione Encargado</option>
                  {allOptions.employees}
                </Select>
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="workTypes" value="Trabajos" />
                </div>

                <Select
                  id="workTypes"
                  {...register("workTypes")}
                  {...getErrorProps("workTypes")}
                >
                  <option value="0">Seleccione Trabajos</option>
                  {allOptions.workTypes}
                </Select>
              </div>
              {/*  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="registrationNumber" value="Matrícula" />
                </div>
                <TextInput
                  id="registrationNumber"
                  type="text"
                  placeholder="Matrícula Embarcación"

                  /*TODO: integrar registrationNumber a zod */
                />
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ships" value="Nombre Nave" />
                </div>
                <Select
                  id="ships"
                  {...register("ships")}
                  {...getErrorProps("ships")}
                >
                  <option value="0">Seleccione Nombre Nave</option>
                  {allOptions.ships}
                </Select>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>

        {/* Formulario para nombre de personal 6 entradas  */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Personal de Faena" active={true} className="block">
            {fields.map((field, index) => (
              <div key={field.id}>
                <Label
                  htmlFor={`workingEmployees[${index}].employee`}
                  value={`Empleado ${index + 1}`}
                  />
                <Select
                  id={`employees`}
                  {...register(`workingEmployees.${index}.employee`)}
                >
                  <option value="0">Seleccione Empleado</option>
                  {allOptions.employees}
                </Select>

                <button type="button" onClick={() => remove(index)}>
                  Quitar
                </button>
              </div>
            ))}
            <button type="button" onClick={() => append({ employee: "0" })}>
              <span className="text-sm font-semibold">
                {" "}
                Agregar Trabajador a la lista +
              </span>{" "}
            </button>

            {errors.workingEmployees?.message && (
              <p className="block border rounded-md m-2 p-2 bg-red-100 text-red-700/60 border-red-400 text-sm  ">
                {errors.workingEmployees.message}
              </p>
            )}
          </Tabs.Item>
        </Tabs>
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Anotaciones" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 grid-cols-1">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="workDetail" value="Trabajos Realizados" />
                </div>
                <Textarea
                  id="workDetail"
                  placeholder="Ingrese el detalle de los trabajos realizados"
                  className="h-48 block w-full"
                  {...register("workDetail")}
                  {...getErrorProps("workDetail")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="observations"
                    value="Observaciones y/o Sugerencias"
                  />
                </div>
                <Textarea
                  id="observations"
                  placeholder="Ingrese Observaciones y/o Sugerencias"
                  className="h-24 block w-full"
                  {...register("observations")}
                  {...getErrorProps("observations")}
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
        <div>{JSON.stringify(watch(), null, 2)}</div>

        <Button className="mx-auto" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
