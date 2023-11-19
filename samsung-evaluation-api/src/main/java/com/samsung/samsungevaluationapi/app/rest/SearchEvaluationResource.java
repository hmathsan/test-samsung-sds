package com.samsung.samsungevaluationapi.app.rest;

import com.samsung.samsungevaluationapi.app.dto.SearchEvaluationResponse;
import com.samsung.samsungevaluationapi.domain.service.SearchEvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search-evaluation")
public class SearchEvaluationResource {

    SearchEvaluationService service;

    @Autowired
    public SearchEvaluationResource(SearchEvaluationService service) {
        this.service = service;
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody List<SearchEvaluationResponse> searchEvaluation(@RequestParam Map<String, String> params) {
        return service.searchEvaluation(params);
    }
}
