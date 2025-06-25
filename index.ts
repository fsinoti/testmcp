import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { callApi } from "./postman";
export const getServer = () => {
  const server = new McpServer({
    name: "My MCP Server",
    version: "1.0.0"
  });

  server.tool(
    "Retorna o orçamento de acordo com id do paciente e id do tratamento",
    `Generated from Postman`,
    { subscriber_id: z.string(), treatment_id: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/estimates/get`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          subscriber_id: input.subscriber_id,
          treatment_id: input.treatment_id,
        },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Cria uma solicitação de agendamento",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/create_online_scheduling`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Pega horários disponíveis",
    `Generated from Postman`,
    { subscriber_id: z.string(), date: z.string(), code_link: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/get_avaliable_times_calendar`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          subscriber_id: input.subscriber_id,
          date: input.date,
          code_link: input.code_link,
        },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Pega dias da semana com horários disponíveis",
    `Generated from Postman`,
    { subscriber_id: z.string(), code_link: z.string(), from: z.string(), to: z.string(), includeHolidays: z.string(), showAvailableTimes: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/get_avaliable_days`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          subscriber_id: input.subscriber_id,
          code_link: input.code_link,
          from: input.from,
          to: input.to,
          includeHolidays: input.includeHolidays,
          showAvailableTimes: input.showAvailableTimes,
        },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Pega informações da solicitação\agendamento pelo id",
    `Generated from Postman`,
    { subscriber_id: z.string(), code_link: z.string(), id: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/get_appointment`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          subscriber_id: input.subscriber_id,
          code_link: input.code_link,
          id: input.id,
        },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Confirma o Agendamento.",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/confirm_appointment`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Cancela agendamento",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/cancel_appointment`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Cria um agendamento na Agenda do Sistema.",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/create_appointment_by_api`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Atualizar Status do Agendamento",
    `Generated from Postman`,
    { id: z.string(), status_id: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/change_status`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: { id: input.id, status_id: input.status_id },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Lista os status do agendamento",
    `Generated from Postman`,
    { subscriber_id: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/appointment/status_list`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: { subscriber_id: input.subscriber_id },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Envia dados de um lead externo para ser adicionado em alguma campanha no CRM",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/crm/add_leads`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Busca 1 paciente em específico.",
    `Generated from Postman`,
    { subscriber_id: z.string(), PatientId: z.string(), Name: z.string(), OtherDocumentId: z.string(), Phone: z.string(), Email: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/patient/get`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          subscriber_id: input.subscriber_id,
          PatientId: input.PatientId,
          Name: input.Name,
          OtherDocumentId: input.OtherDocumentId,
          Phone: input.Phone,
          Email: input.Email,
        },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Cria um novo paciente",
    `Generated from Postman`,
    { body: z.object() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/patient/create`
      const data = await callApi(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(input.body),
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
  server.tool(
    "Lista todos os Agendamentos do Paciente",
    `Generated from Postman`,
    { PatientId: z.string() },
    async (input, extra) => {
    try {
      const baseUrl = `http://{{baseUrl}}/patient/list_appointments`
      const data = await callApi(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: { PatientId: input.PatientId },
      })
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return { content: [{ type: 'text', text: `Error: ${msg}` }], isError: true }
    }
    
    }
  );
server.prompt(
    "verificar_horarios_agendamento",
    'Verifica os horários disponíveis para um paciente em um determinado dia e unidade.
',
    { subscriber_id: z.string(), date: z.string(), code_link: z.string() },
    ({ subscriber_id, date, code_link }) => ({
        messages: [{
            role: "user",
            content: {
                type: "text",
                text: `Quero agendar uma consulta. Você pode verificar os horários disponíveis para o dia ${date}?
`
            }
        }]
    })
);
server.prompt(
    "buscar_paciente_por_cpf",
    'Busca paciente utilizando o CPF para verificar se já está cadastrado.',
    { subscriber_id: z.string(), cpf: z.string() },
    ({ subscriber_id, cpf }) => ({
        messages: [{
            role: "user",
            content: {
                type: "text",
                text: `Verifique se o paciente já está cadastrado utilizando o CPF fornecido.`
            }
        }]
    })
);
server.prompt(
  "buscar_paciente_por_email_ou_telefone",
  "Busca paciente pelo telefone ou e-mail informado.",
  {
    subscriber_id: z.string(),
    telefone: z.string(),
    email: z.string()
  },
  ({ subscriber_id, telefone, email }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Oi, quero agendar uma consulta. Meu telefone é ${telefone} e e-mail ${email}. Veja se já tenho cadastro, por favor.`
        }
      },
      {
        role: "assistant",
        content: {
          type: "text",
          text: "Claro, estou consultando seu cadastro com essas informações."
        }
      }
    ]
  })
);
server.prompt(
  "cadastrar_paciente_novo",
  "Cria um novo paciente com os dados fornecidos.",
  {
    body: z.object({
      nome: z.string(),
      cpf: z.string(),
      telefone: z.string(),
      email: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "system",
        content: {
          type: "text",
          text: "Você deve cadastrar um novo paciente com os dados informados."
        }
      },
      {
        role: "user",
        content: {
          type: "text",
          text: `Oi, ainda não sou paciente da clínica. Meu nome é ${body.nome}, CPF ${body.cpf}, telefone ${body.telefone}, e-mail ${body.email}. Pode me cadastrar?`
        }
      }
    ]
  })
);
server.prompt(
  "cadastrar_paciente_simples",
  "Fluxo rápido para cadastro de paciente por CPF e nome.",
  {
    body: z.object({
      nome: z.string(),
      cpf: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "assistant",
        content: {
          type: "text",
          text: `Você ainda não está cadastrado, mas posso fazer isso agora. Vamos começar com nome e CPF.`
        }
      },
      {
        role: "user",
        content: {
          type: "text",
          text: `Meu nome é ${body.nome} e meu CPF é ${body.cpf}.`
        }
      }
    ]
  })
);
server.prompt(
  "consultar_horarios_disponiveis",
  "Consulta horários disponíveis para agendamento em uma data específica.",
  {
    subscriber_id: z.string(),
    date: z.string(),
    code_link: z.string()
  },
  ({ subscriber_id, date, code_link }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Quais horários vocês têm disponíveis no dia ${date}?`
        }
      }
    ]
  })
);
server.prompt(
  "buscar_horarios_com_assistente",
  "Simula o assistente oferecendo horários para o cliente.",
  {
    subscriber_id: z.string(),
    date: z.string(),
    code_link: z.string()
  },
  ({ date }) => ({
    messages: [
      {
        role: "assistant",
        content: {
          type: "text",
          text: `Você gostaria de ser atendido no dia ${date}, certo? Vou verificar os horários disponíveis para essa data.`
        }
      }
    ]
  })
);
server.prompt(
  "agendar_consulta_simples",
  "Cria um agendamento com os dados fornecidos.",
  {
    body: z.object({
      patient_id: z.string(),
      date: z.string(),
      fromTime: z.string(),
      toTime: z.string(),
      code_link: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Gostaria de marcar minha consulta no dia ${body.date}, das ${body.fromTime} às ${body.toTime}.`
        }
      },
      {
        role: "assistant",
        content: {
          type: "text",
          text: "Perfeito, estou finalizando o agendamento com essas informações."
        }
      }
    ]
  })
);
server.prompt(
  "consultar_detalhes_agendamento",
  "Consulta os detalhes de um agendamento pelo ID.",
  {
    subscriber_id: z.string(),
    code_link: z.string(),
    id: z.string()
  },
  ({ id }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Quero confirmar os dados do meu agendamento com ID ${id}.`
        }
      }
    ]
  })
);
server.prompt(
  "confirmar_agendamento_usuario_pediu",
  "Confirma o agendamento solicitado com os dados previamente definidos.",
  {
    body: z.object({
      patient_id: z.string(),
      schedule_id: z.string(),
      date: z.string(),
      fromTime: z.string(),
      toTime: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Quero confirmar meu agendamento para o dia ${body.date}, das ${body.fromTime} às ${body.toTime}.`
        }
      },
      {
        role: "assistant",
        content: {
          type: "text",
          text: `Certo! Confirmando seu agendamento no sistema.`
        }
      }
    ]
  })
);
server.prompt(
  "confirmar_agendamento_por_voz",
  "Simula confirmação de agendamento com base em instrução verbal/textual do cliente.",
  {
    body: z.object({
      nome: z.string(),
      cpf: z.string(),
      data: z.string(),
      hora: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "system",
        content: {
          type: "text",
          text: "Você recebeu um pedido informal de confirmação de consulta e precisa garantir que está registrado."
        }
      },
      {
        role: "user",
        content: {
          type: "text",
          text: `Acho que já está marcado pra mim no dia ${body.data}, às ${body.hora}. Pode só confirmar isso? Meu CPF é ${body.cpf}.`
        }
      }
    ]
  })
);
erver.prompt(
  "cancelar_agendamento_simples",
  "Cancela o agendamento de um paciente com base em sua solicitação.",
  {
    body: z.object({
      id: z.string(),
      motivo: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Preciso cancelar meu agendamento. Motivo: ${body.motivo}. O ID do agendamento é ${body.id}.`
        }
      }
    ]
  })
);
server.prompt(
  "cancelar_agendamento_paciente",
  "Fluxo alternativo de cancelamento usando identificação do paciente.",
  {
    body: z.object({
      patient_id: z.string(),
      data: z.string()
    })
  },
  ({ body }) => ({
    messages: [
      {
        role: "assistant",
        content: {
          type: "text",
          text: `Você gostaria de cancelar sua consulta do dia ${body.data}? Vou verificar e cancelar pra você.`
        }
      }
    ]
  })
);
server.prompt(
  "ver_orcamento_tratamento",
  "Exibe o orçamento de um tratamento para um paciente.",
  {
    subscriber_id: z.string(),
    treatment_id: z.string()
  },
  ({ subscriber_id, treatment_id }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Gostaria de ver o orçamento do meu tratamento com o código ${treatment_id}.`
        }
      }
    ]
  })
);
server.prompt(
  "consultar_orcamento_com_assistente",
  "Prompt assistente confirmando busca de orçamento.",
  {
    subscriber_id: z.string(),
    treatment_id: z.string()
  },
  ({ treatment_id }) => ({
    messages: [
      {
        role: "assistant",
        content: {
          type: "text",
          text: `Estou localizando o orçamento vinculado ao tratamento ${treatment_id}. Um instante...`
        }
      }
    ]
  })
);

  return server;
};
const server = getServer();
const transport = new StdioServerTransport();
server.connect(transport);
