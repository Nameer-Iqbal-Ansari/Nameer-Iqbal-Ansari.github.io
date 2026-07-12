// ==========================================================================
// DATA — edit these arrays to update site content
// ==========================================================================

const EXPERIENCE = [
  {
    role: "RTL Design Engineer",
    org: "XCLR Technologies (Pvt.) Ltd.",
    date: "02/2025 — Present",
    bullets: [
      "<strong>High-Speed I/O Subsystem (HSIOSS)</strong> — Led design and verification across 3 teams and 6 engineers for a subsystem integrating a 32 Gbps SerDes and PCIe Gen5 controller at a 1.5 GHz core clock, with 2048-bit data / 64-bit configuration AXI interfaces across 8 PCIe lanes. Defined the verification test plan spanning directed chip-level firmware testing and block-level SystemVerilog testbenches.",
      "<strong>RISC-V Vector Load/Store Unit (VLSU)</strong> — Designed a 2048-bit RVV load/store unit interfacing to a 64-bit memory port, with AXI-ID tracking, address generation and translation, and data packing/unpacking for configurable element widths (8–64 bits). Added multi-stage pipelining to cut latency and cell count.",
      "<strong>IP Replacement Across 5 Subsystems</strong> — Re-architected 5 subsystems, replacing Synopsys-sourced converters, crossbars, CDC synchronizers, and AXI bridges with PULP Platform IP, using Synopsys CoreAssembler and CoreConsultant for integration.",
      "<strong>Unified DFT / Functional JTAG Architecture</strong> — Architected a single chip-level JTAG interface muxing a DFT scan-based TAP and a functional RISC-V PULP debug TAP onto one physical port, enabling production test and hardware debug through shared pins.",
      "<strong>Control-Register-to-AXI Bridge</strong> — Designed and verified a bridge between a 16-bit native SerDes control-register interface and a 64-bit AXI configuration bus, resolving CDC and width conversion.",
      "<strong>512-bit eFuse Controller</strong> — Bridged a native eFuse memory array interface to a 32-bit AXI register-access architecture with command-driven transaction handling; validated end-to-end via QSPIS interface testing.",
      "<strong>Chip-Level Low-Power Implementation</strong> — Enabled up to 80% of the chip to run in low-power mode; built a glitch-free clock-gating power-switch mechanism handling in-flight AXI transactions safely via SLVERR/DECERR responses.",
      "<strong>VU19P FPGA SoC Bring-Up</strong> — Led development and emulation of an SoC on the VU19P FPGA using Xilinx Vivado, integrating and validating UART, DDR, and JTAG on real hardware.",
      "<strong>PULP BSCANE2 TAP Integration</strong> — Integrated PULP's <code>dmi_bscane_tap</code> via BSCANE2 so a single HS-3 cable handles both bitstream configuration and RISC-V debug access; validated halt/resume, single-stepping, breakpoints, and register/memory access on-hardware via OpenOCD/GDB.",
      "<strong>DDR4 Bring-Up &amp; Linux Boot on AWS EC2 F1</strong> — Interfaced the SoC with the F1 DDR4-C shell controller, loaded a Linux boot image, and validated end-to-end boot on the Ariane (CVA6) RISC-V core with confirmed memory-mapped access.",
      "<strong>AWS EC2 F1 Shell-Compatible SoC Subsystem</strong> — Developed and validated a subsystem making the SoC's JTAG, UART, and DDR4 interfaces compatible with the F1 Shell's OCL/BAR1 memory-mapped interface and DDR controller.",
      "<strong>JTAG Bring-Up &amp; Debug Validation on AWS EC2 F1</strong> — Bridged the design's JTAG to F1 shell connectivity, with OpenOCD translating GDB's remote protocol into scan commands; ran full halt/resume/breakpoint test cycles with consistent results across repeated runs."
    ]
  },
  {
    role: "Associate Engineer",
    org: "Xcelerium",
    date: "09/2023 — 02/2025",
    bullets: [
      "<strong>12nm Timing Closure at 1.5 GHz</strong> — Achieved -0.01 worst negative slack (WNS) and cleared setup/hold violations across 500+ paths on a RISC-V-based core subsystem, via combinational logic optimization, skew balancing, floorplanning, and SDC constraint fixes.",
      "<strong>JTAG Daisy Chain at Aries</strong> — Designed and validated a daisy-chained JTAG debug architecture linking two PULP <code>riscv-dbg</code> TAP controllers across two subsystems, allowing either core to be halted independently. Verified via SimJTAG (C DPI) in simulation and on AWS EC2 cloud FPGA.",
      "<strong>Lint, CDC &amp; RDC Sign-Off</strong> — Accomplished 0 error/warning sign-off across 4 subsystems (100+ violations each) using Synopsys SpyGlass, clearing designs for physical design.",
      "<strong>RTL Design &amp; Digital IP Integration</strong> — Integrated logic analyzers, CDC synchronizers, AXI-to-APB converters, data-width converters, crossbar interconnects, register files, and FSMs into RTL designs.",
      "<strong>AWS EC2 F1 Shell Interface Validation</strong> — Verified 4 AWS EC2 F1 shell interfaces (OCL, BAR1, DDR, SDA) using C++ drivers and SystemVerilog testbenches across emulation and simulation environments.",
      "<strong>Logic-Analyzer-Based Debugging</strong> — Debugged JTAG and SoC subsystem behavior using logic analyzers across AWS Cloud emulation and VU19P FPGA hardware.",
      "<strong>Technical Documentation &amp; Design Reviews</strong> — Authored design documents, verification test plans, timing diagrams, and block diagrams for design reviews and knowledge transfer."
    ]
  },
  {
    role: "Research Assistant",
    org: "Micro Electronics Research Lab (MERL)",
    date: "03/2020 — 09/2023",
    bullets: [
      "<strong>RV32I Core Design</strong> — Built an open-source RV32I CPU core from scratch in SystemVerilog, simulated with Verilator and FuseSoC, and emulated on an Arty A7 FPGA via Xilinx Vivado. Later integrated basic UVM and JasperGold support.",
      "<strong>Out-of-Order Upgrade to RV32I Core</strong> — Extended the core with out-of-order execution: 2-wide instruction fetch, register renaming via a Register Alias Table (RAT), a reorder buffer (ROB) for in-order commit, and reservation stations feeding ALU and branch units — migrating the pipeline to a dispatch/issue/commit structure inspired by Berkeley's BOOM.",
      "<strong>NOVA1 SoC Development</strong> — Contributed to the NOVA1 SoC and its AWS EC2-based emulation, plus Zyper OS bring-up.",
      "<strong>Multicore Cache Coherency &amp; CHI Research</strong> — Led research into multicore cache coherency via the OpenPiton framework, and researched converting OpenPiton's native coherence protocol to ARM CHI, mapping its directory engine onto CHI's RN-F/HN-F/SN-F abstractions.",
      "<strong>RISC-V Training &amp; Mentorship</strong> — Conducted student training programs on RTL design and open-source contribution.",
      "<strong>NOVA1 Presentation</strong> — Presented the NOVA1 project at the RISC-V Karachi Meetup."
    ]
  }
];

// category keys: asic, fpga, riscv, debug, research
const PROJECTS = [
  {
    id: "hsioss",
    pin: "01",
    title: "HSIOSS — 32 Gbps SerDes + PCIe Gen5 Subsystem",
    cats: ["asic"],
    role: "XCLR Technologies · Lead, design & verification",
    short: "A high-speed I/O subsystem running a 32 Gbps SerDes and PCIe Gen5 controller at 1.5 GHz, verified across firmware and block-level testbenches.",
    body: `<p>Led design and verification across 3 teams and 6 engineers for a subsystem integrating a 32 Gbps SerDes and PCIe Gen5 controller running at a 1.5 GHz core clock with a 100 MHz reference clock.</p>
    <p>The subsystem exposes 2048-bit data and 64-bit configuration AXI interfaces, with a PIPE interface between MAC and PHY spanning 8 PCIe lanes, each through a 32-bit PIPE datapath.</p>
    <p>Defined the verification test plan covering directed chip-level firmware testing alongside block-level SystemVerilog testbenches, and adapted the IP vendor's existing UVM environments where applicable.</p>`,
    tech: ["SerDes", "PCIe Gen5", "AXI", "PIPE", "SystemVerilog", "UVM"]
  },
  {
    id: "vlsu",
    pin: "02",
    title: "RISC-V Vector Load/Store Unit",
    cats: ["asic", "riscv"],
    role: "XCLR Technologies · Design",
    short: "A 2048-bit RVV load/store unit with AXI-ID tracking and configurable element-width packing, pipelined for latency and area.",
    body: `<p>Designed a 2048-bit RISC-V Vector (RVV) load/store unit interfacing to a 64-bit memory port, handling AXI-ID tracking, address generation and translation, and data packing/unpacking logic.</p>
    <p>Supports configurable element widths from 8 to 64 bits within a single vector register, and adds multi-stage pipelining to reduce both latency and cell count.</p>`,
    tech: ["RISC-V Vector Extension", "AXI", "SystemVerilog", "Pipelining"]
  },
  {
    id: "ip-replacement",
    pin: "03",
    title: "IP Replacement Across 5 Subsystems",
    cats: ["asic"],
    role: "XCLR Technologies · Re-architecture",
    short: "Replaced Synopsys-sourced converters, crossbars, and bridges with PULP Platform IP across five subsystems.",
    body: `<p>Re-architected 5 subsystems, replacing Synopsys-sourced data/protocol converters, crossbars, CDC synchronizers, and AXI-to-native-memory bridges with PULP Platform IP.</p>
    <p>Used Synopsys CoreAssembler to generate GUI-based integrated RTL, and CoreConsultant to generate standalone Synopsys IPs where PULP alternatives weren't a fit.</p>`,
    tech: ["PULP Platform", "CoreAssembler", "CoreConsultant", "AXI", "CDC"]
  },
  {
    id: "unified-jtag",
    pin: "04",
    title: "Unified DFT / Functional JTAG Architecture",
    cats: ["asic", "debug"],
    role: "XCLR Technologies · Architecture",
    short: "One physical JTAG port sharing a DFT scan TAP and a functional RISC-V debug TAP for production test and hardware debug.",
    body: `<p>Architected a single chip-level JTAG interface serving two independent TAP controllers — a DFT scan-based TAP and a functional RISC-V PULP debug TAP — by muxing between both onto one physical port.</p>
    <p>This lets production test and hardware debug share the same standard JTAG pins without a dedicated port for each, simplifying the chip's pinout and bring-up flow.</p>`,
    tech: ["JTAG", "DFT", "PULP riscv-dbg", "TAP Muxing"]
  },
  {
    id: "cr-axi-bridge",
    pin: "05",
    title: "Control-Register-to-AXI Bridge",
    cats: ["asic"],
    role: "XCLR Technologies · Design & verification",
    short: "A CDC-safe bridge resolving a 16-bit native SerDes control interface to a 64-bit AXI configuration bus.",
    body: `<p>Designed and verified a protocol bridge between a 16-bit native SerDes control-register interface and a 64-bit AXI configuration bus, resolving both CDC and 64-to-16-bit data-width conversion.</p>
    <p>Validated with a block-level SV testbench, then confirmed system-level firmware testing after integrating the converter into the chip.</p>`,
    tech: ["AXI", "CDC", "SystemVerilog", "Firmware bring-up"]
  },
  {
    id: "efuse",
    pin: "06",
    title: "512-bit eFuse Controller",
    cats: ["asic"],
    role: "XCLR Technologies · Design & verification",
    short: "AXI-accessible eFuse controller with command-driven read/write transaction handling, validated through QSPIS access.",
    body: `<p>Implemented 32-bit AXI access to a 512-bit eFuse array by bridging the native eFuse memory interface to an AXI-based register-access architecture, including command-driven read/write transaction handling.</p>
    <p>Performed SystemVerilog block-level testing and validated end-to-end chip-level functionality through QSPIS interface access testing.</p>`,
    tech: ["eFuse", "AXI", "SystemVerilog", "QSPI"]
  },
  {
    id: "low-power",
    pin: "07",
    title: "Chip-Level Low-Power Implementation",
    cats: ["asic"],
    role: "XCLR Technologies · PPA & power design",
    short: "Glitch-free clock-gating and safe AXI transaction handling enabling 80% of the chip to run in low-power mode.",
    body: `<p>Performed PPA analysis and enabled up to 80% of the chip to operate in low-power mode using Synopsys IP low-power features and custom logic.</p>
    <p>Built a safe power-switch-off mechanism ensuring glitch-free clock gating on low-power entry, and handled incomplete or in-flight AXI transactions safely via AXI response errors (SLVERR/DECERR) during power-state transitions.</p>`,
    tech: ["Low-Power Design", "PPA", "AXI", "Clock Gating"]
  },
  {
    id: "vu19p",
    pin: "08",
    title: "VU19P FPGA SoC Bring-Up",
    cats: ["fpga"],
    role: "XCLR Technologies · Lead",
    short: "Led synthesis-to-bitstream bring-up of an SoC on the VU19P (HTG-950), validating UART, DDR, and JTAG on hardware.",
    body: `<p>Led development and emulation of an SoC targeting the VU19P FPGA (HTG-950 board) using Xilinx Vivado for synthesis, implementation, and bitstream generation.</p>
    <p>Integrated UART, DDR, and JTAG interfaces, and validated DDR and JTAG functionality through on-hardware emulation testing.</p>`,
    tech: ["Xilinx Vivado", "VU19P", "DDR", "UART", "JTAG"]
  },
  {
    id: "bscane2",
    pin: "09",
    title: "PULP BSCANE2 TAP — Unified JTAG Access",
    cats: ["fpga", "debug"],
    role: "XCLR Technologies · Integration",
    short: "A single HS-3 cable handling both bitstream configuration and live RISC-V debug on real hardware, via the FPGA's boundary-scan TAP.",
    body: `<p>Integrated PULP's <code>dmi_bscane_tap</code> (BSCANE2-based) to route JTAG through the FPGA's boundary-scan infrastructure via USER3/USER4, using a Digilent HS-3 cable — so one cable serves both bitstream configuration and functional RISC-V debug access.</p>
    <p>The BSCANE2 primitive internally taps the user-defined scan chain to expose PULP's debug module as the design's virtual TAP. Finalized an OpenOCD configuration with custom IR overrides (<code>dtmcs 0x8A4924</code>, <code>dmi 0x8E4924</code>), 24-bit IR, and IDCODE <code>0x04ba1093</code>.</p>
    <p>Validated the full path on-hardware via OpenOCD/GDB — halt/resume, single-stepping, breakpoints, and register/memory access — on the VU19P/HTG-950 board.</p>`,
    tech: ["JTAG", "BSCANE2", "PULP riscv-dbg", "OpenOCD", "GDB"]
  },
  {
    id: "ddr4-linux",
    pin: "10",
    title: "DDR4 Bring-Up & Linux Boot on AWS EC2 F1",
    cats: ["fpga"],
    role: "XCLR Technologies · Bring-up",
    short: "Brought up DDR4 through the F1 shell and validated an end-to-end Linux boot on the Ariane (CVA6) RISC-V core.",
    body: `<p>Interfaced the SoC with AWS EC2 F1's DDR4-C shell controller to bring up external memory, then loaded a Linux boot image into DDR.</p>
    <p>Validated end-to-end boot on the Ariane (CVA6) RISC-V core, confirming memory-mapped access and core-to-DDR data integrity through the shell interface.</p>`,
    tech: ["AWS EC2 F1", "DDR4", "Ariane/CVA6", "Linux boot"]
  },
  {
    id: "f1-shell",
    pin: "11",
    title: "AWS EC2 F1 Shell-Compatible SoC Subsystem",
    cats: ["fpga"],
    role: "XCLR Technologies · Development",
    short: "Made the SoC's JTAG, UART, and DDR4 interfaces compatible with the F1 Shell's memory-mapped OCL/BAR1 interface.",
    body: `<p>Developed and validated a subsystem making the SoC's JTAG, UART, and DDR4 interfaces compatible with the AWS EC2 F1 Shell's memory-mapped interface (OCL/BAR1) and DDR controller.</p>
    <p>Verified interface accessibility through C++ host-side drivers across both F1 emulation and AWS EC2 simulation environments.</p>`,
    tech: ["AWS EC2 F1", "OCL/BAR1", "C++ drivers"]
  },
  {
    id: "f1-jtag-debug",
    pin: "12",
    title: "JTAG Bring-Up & Debug Validation on AWS EC2 F1",
    cats: ["fpga", "debug"],
    role: "XCLR Technologies · Validation",
    short: "Bridged JTAG to F1 shell connectivity with OpenOCD translating GDB's remote protocol into scan commands.",
    body: `<p>Bridged the design's JTAG interface to AWS EC2 F1 shell's JTAG connectivity, with OpenOCD running as the intermediate server — translating RISC-V GDB's remote protocol on the host side into JTAG scan commands driving the design's debug module on the target side.</p>
    <p>Ran full test cycles covering core halt/resume, single-stepping, breakpoints, and register/memory access, validating consistent debug behavior across repeated test runs.</p>`,
    tech: ["JTAG", "OpenOCD", "GDB", "AWS EC2 F1"]
  },
  {
    id: "jtag-daisy",
    pin: "13",
    title: "JTAG Daisy Chain at Aries",
    cats: ["asic", "debug"],
    role: "Xcelerium · Design & verification",
    short: "A daisy-chained JTAG debug architecture letting either of two cores be halted and debugged independently.",
    body: `<p>Designed and validated a daisy-chained JTAG debug architecture linking two PULP <code>riscv-dbg</code> TAP controllers across two subsystems, allowing either core to be halted and debugged independently while the other continued running normally.</p>
    <p>Verified via SimJTAG (C DPI) in simulation and on AWS EC2 cloud FPGA.</p>`,
    tech: ["JTAG", "PULP riscv-dbg", "SimJTAG", "AWS EC2 FPGA"]
  },
  {
    id: "timing-closure",
    pin: "14",
    title: "12nm Timing Closure at 1.5 GHz",
    cats: ["asic"],
    role: "Xcelerium · Physical-aware RTL",
    short: "Closed timing on a RISC-V core subsystem to -0.01 WNS, clearing 500+ violating paths.",
    body: `<p>Achieved -0.01 worst negative slack (WNS) and reduced setup and hold (reg2out / in2reg / in2out) violations across 500+ violating paths on a 12nm RISC-V-based core subsystem.</p>
    <p>Got there through combinational logic optimization, clock skew balancing, re-registering, floorplanning adjustments, and SDC constraint fixes.</p>`,
    tech: ["12nm", "STA", "SDC", "Floorplanning"]
  },
  {
    id: "rv32i",
    pin: "15",
    title: "Open-Source RV32I Core",
    cats: ["riscv", "research"],
    role: "MERL · Design, from scratch",
    short: "A from-scratch RV32I CPU core in SystemVerilog, simulated in Verilator/FuseSoC and emulated on an Arty A7.",
    body: `<p>Built an open-source RV32I CPU core from scratch in SystemVerilog, simulated with Verilator and FuseSoC, and emulated on an Arty A7 FPGA using Xilinx Vivado.</p>
    <p>Later integrated basic UVM and JasperGold formal verification support around the core.</p>`,
    tech: ["SystemVerilog", "Verilator", "FuseSoC", "Arty A7", "JasperGold"]
  },
  {
    id: "ooo-rv32i",
    pin: "16",
    title: "Out-of-Order Upgrade to RV32I Core",
    cats: ["riscv", "research"],
    role: "MERL · Ongoing microarchitecture work",
    short: "Extending the RV32I core with RAT-based renaming, a reorder buffer, and reservation stations — BOOM-inspired.",
    body: `<p>Extending the RV32I core with out-of-order execution: 2-wide instruction fetch, register renaming via a Register Alias Table (RAT), a reorder buffer (ROB) for in-order commit, and reservation stations feeding the ALU and branch execution units.</p>
    <p>Migrating the existing in-order pipeline to a dispatch/issue/commit structure, inspired by Berkeley's BOOM design.</p>`,
    tech: ["Out-of-Order Execution", "Register Renaming", "ROB", "Reservation Stations", "BOOM"]
  },
  {
    id: "nova1",
    pin: "17",
    title: "NOVA1 SoC",
    cats: ["riscv", "fpga", "research"],
    role: "MERL · Contributor",
    short: "An RV64GC application-class RISC-V SoC with UART, BRAM, DDR, and JTAG, emulated on AWS EC2.",
    body: `<p>Contributed to NOVA1, an open-source RISC-V-based application-class AI SoC built around an RV64GC core with UART, BRAM, DDR, and JTAG support.</p>
    <p>Worked on the SoC's AWS EC2-based emulation and Zyper OS bring-up, and later presented the project at the RISC-V Karachi Meetup.</p>`,
    tech: ["RV64GC", "AWS EC2 emulation", "DDR", "JTAG"]
  },
  {
    id: "chi-coherency",
    pin: "18",
    title: "Multicore Cache Coherency & CHI Research",
    cats: ["research"],
    role: "MERL · Research lead",
    short: "Researched multicore coherency via OpenPiton, and mapping its directory protocol onto ARM's CHI.",
    body: `<p>Led research into multicore cache-coherent memory systems using the OpenPiton framework with the Ariane core (MARCore1).</p>
    <p>Also researched converting OpenPiton's native coherence protocol to ARM's CHI, mapping its directory-based coherence engine onto CHI's RN-F / HN-F / SN-F node abstractions — groundwork now extending into a standalone CHI-based cache coherency project.</p>`,
    tech: ["OpenPiton", "ARM CHI", "Cache Coherency", "Ariane Core"]
  },
  {
    id: "gsoc-azadi",
    pin: "19",
    title: "GSoC — FuseSoC Support & Ibex Rebase on Azadi-SoC",
    cats: ["research"],
    role: "Google Summer of Code 2022 · Contributor",
    short: "Added FuseSoC support to Azadi-SoC and rebased its Ibex core to the latest upstream.",
    body: `<p>Contributed to Azadi-SoC during Google Summer of Code 2022, adding FuseSoC build-system support and rebasing the integrated Ibex core to the latest upstream commits.</p>`,
    tech: ["FuseSoC", "Ibex", "Open Source"]
  },
  {
    id: "gsoc-mentor",
    pin: "20",
    title: "GSoC Mentorship — TileLink UH on Azadi-SoC",
    cats: ["research"],
    role: "Google Summer of Code 2023 · Mentor",
    short: "Mentored the TileLink Uncached Heavyweight (TL-UH) implementation on Azadi-SoC.",
    body: `<p>Returned to Google Summer of Code in 2023 as a mentor, guiding a contributor's implementation of TileLink Uncached Heavyweight (TL-UH) on the Azadi-SoC platform.</p>`,
    tech: ["TileLink UH", "Mentorship", "Open Source"]
  }
];

const REGMAP = [
  { addr: "0x00", name: "RTL Design", fields: ["RISC-V VLSU", "JTAG", "SerDes", "PCIe", "eFuse", "UART", "CDC", "XBAR", "Cache", "AXI", "APB", "TileLink"] },
  { addr: "0x04", name: "EDA Tools", fields: ["VCS", "Verdi", "Xilinx Vivado", "GTKWave", "CoreAssembler", "CoreConsultant", "QuestaSim", "Verilator", "FusionCompiler", "PrimeTime"] },
  { addr: "0x08", name: "Formal Verification", fields: ["JasperGold", "SVA"] },
  { addr: "0x0C", name: "Static Analysis", fields: ["Synopsys SpyGlass (Lint / CDC / RDC)"] },
  { addr: "0x10", name: "Languages", fields: ["Verilog", "SystemVerilog", "SystemVerilog-OOP", "UVM (basic)", "C", "C++", "RISC-V Assembly"] },
  { addr: "0x14", name: "Scripting", fields: ["Tcl", "Shell", "Makefile", "CI/CD", "Python", "YAML (FuseSoC)"] },
  { addr: "0x18", name: "Version Control / OS", fields: ["GitHub", "GitLab", "Linux", "Windows"] }
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "asic", label: "ASIC" },
  { key: "fpga", label: "FPGA" },
  { key: "riscv", label: "RISC-V Core" },
  { key: "debug", label: "Debug / JTAG" },
  { key: "research", label: "Research" }
];

// ==========================================================================
// RENDER
// ==========================================================================

function renderTimeline(){
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="tl-item ${i === 0 ? "open" : ""}" data-idx="${i}">
      <button class="tl-head" aria-expanded="${i === 0}">
        <div class="tl-head-left">
          <span class="tl-role">${job.role}</span>
          <span class="tl-org">${job.org}</span>
        </div>
        <span class="tl-date mono">${job.date}</span>
        <svg class="tl-chevron" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="tl-body" style="${i === 0 ? "" : "max-height:0;"}">
        <ul class="tl-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".tl-head").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".tl-item");
      const body = item.querySelector(".tl-body");
      const isOpen = item.classList.contains("open");
      if (isOpen){
        body.style.maxHeight = "0px";
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

function renderFilters(){
  const bar = document.getElementById("filterBar");
  bar.innerHTML = FILTERS.map((f, i) => `
    <button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f.key}" role="tab" aria-selected="${i === 0}">${f.label}</button>
  `).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected","true");
      renderProjects(btn.dataset.filter);
    });
  });
}

function catLabel(cat){
  const map = { asic: "ASIC", fpga: "FPGA", riscv: "RISC-V Core", debug: "Debug / JTAG", research: "Research" };
  return map[cat] || cat;
}

function renderProjects(filter = "all"){
  const grid = document.getElementById("projectGrid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));

  grid.innerHTML = list.map(p => `
    <button class="project-card" data-id="${p.id}">
      <div class="pc-top">
        <span class="pc-pin mono">PIN ${p.pin}</span>
        <span class="pc-cat">${catLabel(p.cats[0])}</span>
      </div>
      <div class="pc-title">${p.title}</div>
      <div class="pc-desc">${p.short}</div>
      <div class="pc-foot">
        <span>${p.role.split("·")[0].trim()}</span>
        <span>view &rarr;</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function renderRegmap(){
  const el = document.getElementById("regmap");
  el.innerHTML = REGMAP.map(r => `
    <div class="regmap-row">
      <div class="regmap-addr">
        <span class="a">${r.addr}</span>
        <span class="n">${r.name}</span>
      </div>
      <div class="regmap-fields">
        ${r.fields.map(f => `<span class="chip">${f}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// MODAL
// ==========================================================================

function openModal(id){
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById("modalTag").textContent = p.cats.map(catLabel).join(" · ");
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalRole").textContent = p.role;
  document.getElementById("modalBody").innerHTML = p.body;
  document.getElementById("modalTech").innerHTML = p.tech.map(t => `<span class="chip">${t}</span>`).join("");

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ==========================================================================
// NAV — mobile toggle + scrollspy
// ==========================================================================

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const sections = ["home","about","experience","projects","skills","education","contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navAnchors = Array.from(document.querySelectorAll("[data-nav]"));

function updateActiveNav(){
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

// ==========================================================================
// INIT
// ==========================================================================

document.getElementById("year").textContent = new Date().getFullYear();
renderTimeline();
renderFilters();
renderProjects();
renderRegmap();
updateActiveNav();
