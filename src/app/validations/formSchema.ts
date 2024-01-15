import { z } from "zod";

// Utility function to validate time format (e.g., "HH:MM")
const validateTimeFormat = (time: string) => {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
};

const companies = ["compA", "compB", "compC"] as const;
const center = ["centerA", "centerB", "centerC"] as const;
const typeOfcages = ["typeA", "typeB", "typeC"] as const;
const employees = ["empA", "empB", "empC"] as const;
const materials = [
  "rope",
  "loberoThread",
  "gasoline",
  "oil",
  "others",
] as const;
const ships = ["shipA", "shipB", "shipC"] as const;
const inCharges = ["inChargeA", "inChargeB", "inChargeC"] as const;
const workTypes = [
  "workTypeA",
  "workTypeB",
  "workTypeC",
  "workTypeD",
  "workTypeE",
] as const;

export type Companies = (typeof companies)[number];
export type Center = (typeof center)[number];
export type TypeOfCages = (typeof typeOfcages)[number];
export type Employees = (typeof employees)[number];
export type Materials = (typeof materials)[number];
export type Ships = (typeof ships)[number];
export type InCharges = (typeof inCharges)[number];
export type WorkTypes = (typeof workTypes)[number];

const mappedCompanies: { [key in Companies]: string } = {
  compA: "Empresa A",
  compB: "Empresa B",
  compC: "Empresa C",
};

const mappedCenter: { [key in Center]: string } = {
  centerA: "Centro A",
  centerB: "Centro B",
  centerC: "Centro C",
};

const mappedTypeOfCages: { [key in TypeOfCages]: string } = {
  typeA: "Tipo A",
  typeB: "Tipo B",
  typeC: "Tipo C",
};

const mappedEmployees: { [key in Employees]: string } = {
  empA: "Empleado A",
  empB: "Empleado B",
  empC: "Empleado C",
};

const mappedMaterials: { [key in Materials]: string } = {
  rope: "Cuerda",
  loberoThread: "Hilo de lobo",
  gasoline: "Gasolina",
  oil: "Aceite",
  others: "Otros",
};

const mappedShips: {
  [key in Ships]: { name: string; registrationNumber: string };
} = {
  shipA: { name: "Nave A", registrationNumber: "RegA123" },
  shipB: { name: "Nave B", registrationNumber: "RegB456" },
  shipC: { name: "Nave C", registrationNumber: "RegC789" },
};

const mappedInCharges: { [key in InCharges]: string } = {
  inChargeA: "Encargado A",
  inChargeB: "Encargado B",
  inChargeC: "Encargado C",
};

const mappedWorkTypes: { [key in WorkTypes]: string } = {
  workTypeA: "Tipo de trabajo A",
  workTypeB: "Tipo de trabajo B",
  workTypeC: "Tipo de trabajo C",
  workTypeD: "Tipo de trabajo D",
  workTypeE: "Tipo de trabajo E",
};

export const mappedFormOptions = {
  companies: mappedCompanies,
  center: mappedCenter,
  typeOfCages: mappedTypeOfCages,
  employees: mappedEmployees,
  materials: mappedMaterials,
  ships: mappedShips,
  inCharges: mappedInCharges,
  workTypes: mappedWorkTypes,
};


export const formSchema = z.object({
  date: z
    .string()
    .refine((dow) => new Date(dow).toString() !== "Invalid Date", {
      message: "Fecha inválido",
    }),

  company: z.enum(companies, {
    errorMap: () => ({ message: "Empresa inválida" }),
  }),
  center: z.enum(center, { errorMap: () => ({ message: "Centro inválido" }) }),
  typeOfCage: z
    .enum(typeOfcages, {
      errorMap: () => ({ message: "Tipo de jaula invalido" }),
    })
    .optional(),
  startTime: z.string().refine(validateTimeFormat, {
    message: "Formato de hora de inicio inválido (expected HH:MM)",
  }),
  endTime: z.string().refine(validateTimeFormat, {
    message: "Formato de hora de fin inválido (expected HH:MM)",
  }),
  
  /* workingEmployees que es un arrai de al menos un elemento, y estos elementos pueden ser lo semployees */
  workingEmployees: z.array(z.object({
    employee: z.enum(employees, {
        errorMap: () => ({ message: "Trabajador invalido , Selecione uno de la lista" }),
        }),
    })
).min(1, {
  
    message: "Debe haber al menos un trabajador",
  }),

  usedMaterials: z.array(
    z.object({
        material: z.enum(materials, {
            errorMap: () => ({ message: "Material inválido" }),
        }),
        detail: z.string().min(1, {
            message: "Debe completar el detalle del material",
        }),
    })
).min(1, {
    message: "Debe añadir al menos un material",
}),


  ships: z.enum(ships, { errorMap: () => ({ message: "Barco inválido" }) }),
  inCharges: z.enum(inCharges, {
    errorMap: () => ({ message: "Encargado inválido" }),
  }),
  workTypes: z.enum(workTypes, {
    errorMap: () => ({ message: "Tipo de trabajo inválido" }),
  }),
  workDetail: z.string().min(10, {
    message: "Debe completar los detalles del Trabajo (min: 10 caracteres)",
  }),
  observations: z.string().optional(),
});
