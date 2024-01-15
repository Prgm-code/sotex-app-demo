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

import {
  useForm,
  SubmitHandler,
  useFieldArray,
  FieldErrors,
} from "react-hook-form";
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
  materials: string;
  usedMaterials: { material: string; detail: string }[];
};

interface OptionElements {
  [key: string]: JSX.Element[];
}

interface itemsArrayProps {
  detail: string;
  material: string;
  employee: string;
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

export default function Form({ agregarObjeto }: { agregarObjeto: any }) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workingEmployees: [{ employee: "0" }],
      usedMaterials: [{ material: "0", detail: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workingEmployees",
  });
  const {
    fields: materialsFields,
    append: materialsAppend,
    remove: materialsRemove,
  } = useFieldArray({
    control,
    name: "usedMaterials",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    agregarObjeto(data);
    console.log(data);
    /* limpia el formulario  */
    reset();
  };
  console.log(errors);
  /* verificar que el error venga en un array si es ek caso de workingEMployees */

  const getErrorProps = (fieldName: keyof Inputs) => {
    const errorMessage = errors[fieldName]?.message;
    return errorMessage
      ? {
          color: "failure", // Establece el color a 'failure' si hay un error
          helperText: errorMessage, // Muestra el mensaje de error
        }
      : {};
  };

  const getErrorPropsArray = (
    errors: FieldErrors<Inputs>,
    fieldName: keyof Inputs,
    item: keyof itemsArrayProps,
    index?: number
  ) => {
    let errorMessage: string | undefined;

    if (typeof index === "number") {
      // Correctly typed access to nested array errors
      const fieldError = errors[fieldName];
      if (Array.isArray(fieldError)) {
        errorMessage =
          fieldError[index]?.[item as keyof itemsArrayProps]?.message;
      }
    } else {
      errorMessage = errors[fieldName]?.message;
    }

    return errorMessage
      ? {
          color: "failure",
          helperText: errorMessage,
        }
      : {};
  };

  return (
    <>
      <h2 className="text-xl font-bold text-center text-gray-900 sm:text-2xl lg:text-4xl xl:text-5xl mt-6">
      Formulario de Reporte de trabajo
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

        {/* hora de inicio y hora de termino */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item
            title="Hora de Inicio y Término"
            active={true}
            className="block"
          >
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-2 ">
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
        {/* Formulario de Materiales */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Materiales Usados" active={true} className="block">
            {materialsFields.map((field, index) => (
              <>
                <div key={field.id} className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`usedMaterials.${index}.material`}
                        value="Material"
                      ></Label>
                    </div>
                    <Select
                      {...register(`usedMaterials.${index}.material`)}
                      {...getErrorPropsArray(
                        errors,
                        "usedMaterials",
                        "material",
                        index
                      )}
                    >
                      <option value="0">Seleccione Material</option>
                      {allOptions.materials}
                      {/* Opciones de materiales */}
                    </Select>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`usedMaterials.${index}.detail`}
                        value="Cantidad"
                      ></Label>
                    </div>
                    <TextInput
                      type="string"
                      placeholder="Cantidad"
                      {...register(`usedMaterials.${index}.detail`)}
                      {...getErrorPropsArray(
                        errors,
                        "usedMaterials",
                        "detail",
                        index
                      )}
                    />
                  </div>
                </div>
                <Button
                  className="border-gray-300 hover:text-gray-700 p-2 mt-2"
                  size="sm"
                  color="gray"
                  onClick={() => materialsRemove(index)}
                >
                  <span className="text-sm"> Quitar Material -</span>
                </Button>
              </>
            ))}
            <Button
              className="border-gray-300 hover:text-gray-700 p-2 mt-2"
              size="sm"
              color="gray"
              onClick={() => materialsAppend({ material: "0", detail: "" })}
            >
              <span className="text-sm">Añadir Material +</span>
            </Button>
            {errors.usedMaterials?.message && (
              <p className="block border rounded-md m-2 p-2 bg-red-100 text-red-700/60 border-red-400 text-sm  ">
                {errors.usedMaterials.message}
                {}
              </p>
            )}
          </Tabs.Item>
        </Tabs>
        {/* Formulario Embarcacónm */}
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
                  {allOptions.inCharges}
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
                  id={`workingEmployees`}
                  {...register(`workingEmployees.${index}.employee`)}
                  {...getErrorPropsArray(
                    errors,
                    "workingEmployees",
                    "employee",
                    index
                  )}
                >
                  <option value="0">Seleccione Nombre del Personal</option>
                  {allOptions.employees}
                </Select>

                <Button
                  className="border-gray-300 hover:text-gray-700 p-2 mt-2"
                  size="sm"
                  color="gray"
                  onClick={() => remove(index)}
                >
                  <span className="text-sm"> Quitar Personal -</span>
                </Button>
              </div>
            ))}
            <Button
              className="border-gray-300 hover:text-gray-700 p-2 mt-2"
              size={"sm"}
              color="gray"
              onClick={() => append({ employee: "0" })}
            >
              <span className="text-sm ">Añadir Personal +</span>
            </Button>

            {errors.workingEmployees?.message && (
              <p className="block border rounded-md m-2 p-2 bg-red-100 text-red-700/60 border-red-400 text-sm  ">
                {errors.workingEmployees.message}
                {}
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
        {/*         <div>{JSON.stringify(watch(), null, 2)}</div> */}

        <Button className="mx-auto" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}
