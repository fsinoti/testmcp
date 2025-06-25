# 🦷 MCP Server - Clínica 

Este projeto implementa um agente inteligente (MCP) capaz de executar **fluxos completos de atendimento odontológico**, como agendamento, cancelamento e consulta de pacientes e horários.

## 📦 Estrutura do projeto

- `server.ts` – Implementa as tools MCP (integrações com a API da clínica)
- `prompts.ts` – Define os prompts que interpretam comandos do paciente e ativam as tools corretas
- `postman.ts` – Wrapper auxiliar para chamadas HTTP
- `package.json` – Dependências do MCP e schema validation

---

## ⚙️ Funcionalidades

### ✅ Fluxo completo de agendamento
O agente é capaz de:
1. Buscar o paciente (por CPF, e-mail ou telefone)
2. Criar cadastro, se não existir
3. Consultar horários disponíveis no dia solicitado
4. Agendar a consulta automaticamente

### 🛠️ Tools implementadas
- `get_estimates` – Busca orçamentos
- `create_appointment_by_api` – Cria agendamento na agenda oficial
- `get_avaliable_times_calendar` – Lista horários disponíveis
- `get_avaliable_days` – Lista dias com disponibilidade
- `get_appointment` – Consulta agendamento por ID
- `confirm_appointment` – Confirma agendamento
- `cancel_appointment` – Cancela agendamento
- `add_leads` – Envia lead para o CRM
- `get_patient` – Busca paciente
- `create_patient` – Cria paciente
- `list_appointments` – Lista agendamentos do paciente
- `status_list` – Lista os status possíveis de um agendamento
- `change_status` – Atualiza o status de um agendamento

---

## 💬 Prompts disponíveis

### 🔍 Consulta e cadastro de paciente
- `buscar_paciente_por_cpf`
- `buscar_paciente_por_email_ou_telefone`
- `cadastrar_paciente_novo`
- `cadastrar_paciente_simples`

### 📅 Horários e agendamento
- `consultar_horarios_disponiveis`
- `buscar_horarios_com_assistente`
- `agendar_consulta_simples`

### ✅ Confirmação e cancelamento
- `confirmar_agendamento_usuario_pediu`
- `confirmar_agendamento_por_voz`
- `cancelar_agendamento_simples`
- `cancelar_agendamento_paciente`

### 📄 Orçamento e CRM
- `ver_orcamento_tratamento`
- `consultar_orcamento_com_assistente`
- `enviar_lead_para_campanha`

---

## 🧠 Como funciona o fluxo do agente

O agente MCP entende comandos como:
> “Quero agendar uma consulta no dia 25/06, meu nome é João, CPF 000.000.000-00…”

E automaticamente:
1. Verifica se o paciente está cadastrado
2. Cadastra, se necessário
3. Busca horários disponíveis
4. Escolhe o melhor horário
5. Confirma o agendamento

---

## 🧪 Testando localmente

```bash
npm install
node server.ts
